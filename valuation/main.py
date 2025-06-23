from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import time

options = webdriver.EdgeOptions()
options.add_experimental_option("useAutomationExtension", False)
options.add_experimental_option("excludeSwitches", ['enable-automation'])  
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("user-data-dir=C:/Users/phili/AppData/Local/Microsoft/Edge/User Data")
options.add_argument("log-level=3")
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Edge(options=options)

def readProducts():
 arq = open("C:/Users/phili/Desktop/giph-site/valuation/products.txt", "r", encoding="utf-8")
 text = arq.read()
 products = text.split("{")
 newPs = []
 for i in range(0, len(products)):
  p = products[i].replace("\n","").replace("    ","")
  try:
   id = p.split("id:")[1].split(",")[0].replace("'","").replace('"','')
   url = p.split("url:")[1].split(",")[0].replace("'","").replace('"','')
   src = p.split("src:")[1].split(",")[0].replace("'","").replace('"','')
   title = p.split("title:")[1].split(",")[0].replace("'","").replace('"','')
   price = p.split("price:")[1].split('"')[1].replace("'","").replace('"','')
   #comission = p.split("comission:")[1].split(",")[0].replace("'","").replace('"','')
   sells = p.split("sells:")[1].split(",")[0].replace("'","").replace('"','')
   shop = p.split("shop:")[1].split(",")[0].replace("'","").replace('"','')
   category = p.split("category:")[1].split(",")[0].replace("'","").replace('"','')
   subcategory = p.split("subcategory:")[1].split(",")[0].replace("'","").replace('"','').replace("}","")

   if int(id) >= 72:newPs.append([id, url, src, title, price, sells, shop, category, subcategory])
  except:pass
 return(newPs)

def getProductInfo(p):
 driver.get(p[1])

products = readProducts()
driver.get("https://www.shopee.com.br")
input("Faça login na Shopee")
driver.get("https://www.amazon.com.br")
input("Faça login na Amazon")

for p in products:
 info = getProductInfo(p)
 #input("Posso tentar encontrar o preço?")
 time.sleep(7)
 price = "0"
 try:
  if p[6] == "shopee":
   price = driver.find_element(by="xpath",value="/html/body/div[1]/div[1]/div[2]/div/div/div[1]/div/div/div/div[2]/section/section[2]/div/div[3]/div/section/div/div[1]").text.replace("R$","")
   if len(price.split(" - ")) > 0:price = price.split(" - ")[0]
  elif p[6] == "amazon":
   priceWhole = driver.find_element(by="xpath",value="/html/body/div[2]/div/div/div[4]/div[4]/div[14]/div/div/div[3]/div[1]/span[3]/span[2]/span[2]").text
   priceFloat = driver.find_element(by="xpath",value="/html/body/div[2]/div/div/div[4]/div[4]/div[14]/div/div/div[3]/div[1]/span[3]/span[2]/span[3]").text
   price = priceWhole + "," + priceFloat
  if price != p[4] and price != "0":print(">> Alterar preço ID " + p[0] + ": " + p[4] + " >> " + price)
 except NoSuchElementException:
  print(">> ERRO no ID " + p[0] + " // " + p[6])

driver.quit()