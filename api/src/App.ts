import * as express from 'express'
import * as fs from 'fs'
import * as mongoose from 'mongoose'
import * as session from "express-session";




export class App {
  public express: any
  public db:mongoose.Connection;
  constructor() {
    this.express = express()
    this.conncectToDatabase();
  }
  conncectToDatabase(){
    mongoose.connect('mongodb://localhost:27017/test');
    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function() {
      // we're connected!
    });
  }

}
export default new App

let files = fs.readdirSync(__dirname + '/controllers');
files.forEach(fileName => {
  require(__dirname + '/controllers/' + fileName);
});
