import requests, pyautogui, time

def getLinks():
    time.sleep(5)
    #366
    for n in range(101, 367):
        print(">> Na rodada " + str(n))
        lks = []
        r = requests.post("https://collshp.com/api/v3/gql/graphql", json={"operationName": "getBaseInfoAndLinks","query": "query getBaseInfoAndLinks($urlSuffix: String!, $pageSize: String, $pageNum: String, $groupId: String, $linkNameKeyword: String) {\n  landingPageBaseInfo(urlSuffix: $urlSuffix) {\n    name\n    headPortrait\n    description\n    region\n    affiliateId\n    shopLink\n    background\n    groupList {\n      groupId\n      groupName\n      groupType\n    }\n    topFiveExternalLinkImages\n  }\n  landingPageLinkList(\n    urlSuffix: $urlSuffix\n    pageSize: $pageSize\n    pageNum: $pageNum\n    groupId: $groupId\n    linkNameKeyword: $linkNameKeyword\n  ) {\n    totalCount\n    linkList {\n      linkId\n      link\n      linkName\n      image\n      linkType\n      groupIds\n    }\n  }\n}\n","variables": {"urlSuffix": "investigueiofertas","pageSize": "10","pageNum":str(n)}})
        links = r.text.split('"link"')
        for i in range(1, len(links)):
            link = links[i].split(",")[0].replace('"', '').replace(":http", "http")
            lks.append(link)
        for i in range(0, len(lks)):
            time.sleep(1)
            pyautogui.write(lks[i], interval=0.15)
            pyautogui.press("enter")
        
getLinks()