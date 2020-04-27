import pymongo
import dns # required for connecting with SRV
import json
import pprint
import requests


class DBSetup():

    def __init__(self):
        self.token = '3516dc9239854dae9ab86fca5e67e787'
        self.url = 'https://api.weatherbit.io/v2.0/forecast/daily?'
        self.query = 'city=Boulder,CO&units=I&days=3&key='

    def setup_client(self):
        self.client = pymongo.MongoClient("mongodb+srv://kylebremont:weatherapp@cluster0-t12le.gcp.mongodb.net/test?retryWrites=true&w=majority")
        self.db = self.client.test
        self.weather_db = self.client["weather_data"]

    def setup_collections(self):
        self.weather_collection = self.weather_db["weather"]

    def load_collections(self):
        response = requests.get(self.url + self.query + self.token)
        if response.status_code == 200:
            data_json = json.loads(response.content.decode('utf-8'))
            pprint.pprint(data_json)
            # self.weather_collection.insert(data_json)
        else:
            print('Error!')

    def drop_data(self):
        self.weather_collection.drop()

    def tear_down(self):
        self.client.close()


def main():
    db = DBSetup()
    # db.setup_client()
    # db.setup_collections()
    # db.drop_data()
    db.load_collections()
    # db.tear_down()

if __name__=='__main__':
    main()