import requests
import re

API_URL = "https://api-inference.huggingface.co/models/AdamCodd/donut-receipts-extract"
headers = {"Authorization": "Bearer hf_<HF_API_KEY>"}
IMAGE = "./test.jpg"

def scan_receipt(filename):
   
    with open(filename, "rb") as f:
        data = f.read()
    
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()


def parse_receipt(text):
    # woop woop, time to extract data!!
    data = {}

    
    data['store_name'] = re.search(r'<s_store_name>(.*?)</s_store_name>', text).group(1)
    data['store_address'] = re.search(r'<s_store_addr>(.*?)</s_store_addr>', text).group(1)
    data['phone'] = re.search(r'<s_phone>(.*?)</s_phone>', text).group(1)
    data['date'] = re.search(r'<s_date>(.*?)</s_date>', text).group(1)
    data['time'] = re.search(r'<s_time>(.*?)</s_time>', text).group(1)
    data['subtotal'] = re.search(r'<s_subtotal>(.*?)</s_subtotal>', text).group(1)
    data['service_charge'] = re.search(r'<s_svc>(.*?)</s_svc>', text).group(1)
    data['tax'] = re.search(r'<s_tax>(.*?)</s_tax>', text).group(1)
    data['total'] = re.search(r'<s_total>(.*?)</s_total>', text).group(1)
    data['tips'] = re.search(r'<s_tips>(.*?)</s_tips>', text).group(1)
    data['discount'] = re.search(r'<s_discount>(.*?)</s_discount>', text).group(1)
    return data

parsed_receipt = parse_receipt(
    scan_receipt(IMAGE)[0]['generated_text']
)
print(parsed_receipt)
