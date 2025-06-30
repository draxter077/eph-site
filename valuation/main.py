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

# Reads products.txt
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

  if int(id) >= 0:newPs.append([id, url, src, title, price, sells, shop, category, subcategory])
 except:pass
 arq.close()

products = newPs

# Get price of each
driver.get("https://www.shopee.com.br")
input("Faça login na Shopee")
driver.get("https://www.amazon.com.br")
input("Faça login na Amazon")

changes = []

for p in products:
 driver.get(p[1])
 time.sleep(5)
 price = "0"
 if p[6] == "shopee":
  try:
   price = driver.find_element(by="xpath",value="/html/body/div[1]/div[1]/div[2]/div/div/div[1]/div/div/div/div[2]/section/section[2]/div/div[3]/div/section/div/div[1]").text.replace("R$","")
   if len(price.split(" - ")) > 0:price = price.split(" - ")[0]
  except NoSuchElementException:pass
 elif p[6] == "amazon":
  priceWhole = "0"
  priceFloat = "00"
  try:                         
   priceWhole = driver.find_element(by="class name",value="a-price-whole").text                                     
   priceFloat = driver.find_element(by="class name",value="a-price-fraction").text
  except NoSuchElementException:pass
  price = priceWhole + "," + priceFloat
 if price != p[4] and (price != "0" and price != "0,00"):
  print(">> Alterar preço ID " + p[0] + ": " + p[4] + " >> " + price)
  changes.append([p[0], p[4], price]) # Id, price, newPrice

driver.quit()

# Write in products.txt the changes
arq = open("C:/Users/phili/Desktop/giph-site/valuation/products.txt", "r", encoding="utf-8")
text = arq.read()
products = text.split("{")
newText = ""
arq2 = open("C:/Users/phili/Desktop/giph-site/valuation/products.txt", "w", encoding="utf-8")
arq2.write("export default\n[\n")
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

  # Finds ID
  for k in range(0, len(changes)):
   c = changes[k]
   if id == c[0]:
    price = c[2]
    break

  # Write in file
  arq2.write('  {\n')
  arq2.write('      id:' + id + ',\n')
  arq2.write('      url:"' + url + '",\n')
  arq2.write('      src:"' + src + '",\n')
  arq2.write('      title:"' + title + '",\n')
  arq2.write('      price:"' + price + '",\n')
  arq2.write('      sells:"' + sells + '",\n')
  arq2.write('      shop:"' + shop + '",\n')
  arq2.write('      category:"' + category + '",\n')
  arq2.write('      subcategory:"' + subcategory + '",\n')
  arq2.write('  },\n')
 except:pass

arq2.write("]")
arq.close()
arq2.close()