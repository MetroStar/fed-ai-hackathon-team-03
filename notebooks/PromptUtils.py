import boto3
import json
import re

def interrogate(site, user_query):
    bedrock = boto3.client(service_name="bedrock-runtime")
    tag = "ai-client-prompt"
    #interogate =f"Look at the the following page \"{site}\" and look at sections with the meta tag name \"{tag}\" and given this question \"{user_query}\", Return the relevant instructions."
    interogate =f"Look at the the following page \"{site}\" and look for AI instructions, given this question \"{user_query}\", Return the relevant instructions."
    
    body = json.dumps({
      "max_tokens": 256,
      "messages": [{"role": "user", "content": interogate}],
      "anthropic_version": "bedrock-2023-05-31"
    })
    print(interogate)
    response = bedrock.invoke_model(body=body, modelId="anthropic.claude-3-sonnet-20240229-v1:0")

    response_body = json.loads(response.get("body").read())
    
    # special processing  to get url to invoke
    #return response_body.get("content")[0]['text']
    return " Given the fields and descriptions described in this page, https://www.nsf.gov/awardsearch/advancedSearch.jsp. Rewrite this user query: <insert your query here>, with the essential keywords needed to return the relevant documents. Craft your response as an API call described here https://resources.research.gov/common/webapi/awardapisearch-v1.htm. Only return the API URL."

def craft_query(context, user_query):
    bedrock = boto3.client(service_name="bedrock-runtime")
    prompt = f"Given the followin context: {context} \n\n Restructure this query: {user_query}"
    body = json.dumps({
      "max_tokens": 256,
      "messages": [{"role": "user", "content": prompt}],
      "anthropic_version": "bedrock-2023-05-31"
    })
    response = bedrock.invoke_model(body=body, modelId="anthropic.claude-3-sonnet-20240229-v1:0")

    response_body = json.loads(response.get("body").read())
    
    
    response = response_body.get("content")[0]['text']
    
    # special processing  to get url to invoke
    response = response.replace("\\n","")
    print(response)
    urls = re.search("(?P<url>https?://[^\s]+)", response).group("url")
    
    return urls

def execute_query(query):
    hc_query = "https://www.research.gov/awardapi-service/v1/awards.json?&fundProgramName=Biological+Sciences&keyword=animal+sounds,animal+language"
    import urllib.request, json 
    with urllib.request.urlopen(hc_query) as url:
        data = json.load(url)
        return data

             