import pymongo
import dns # required for connecting with SRV
import json
import pandas as pd
import pprint
import requests
import csv


class DBSetup():

    def setup_client(self):
        self.client = pymongo.MongoClient("mongodb+srv://kylebremont:weatherapp@cluster0-t12le.gcp.mongodb.net/test?retryWrites=true&w=majority")
        self.db = self.client.test
        self.weather_db = self.client["weather_data"]

    def setup_collections(self):
        self.weather_collection = self.weather_db["weather"]