import * as express from 'express'
import * as fs from 'fs'

export class App {
  public express: any

  constructor() {
    this.express = express()
  }
  
  // public loadControllers(): void {
  //   let files = fs.readdirSync(__dirname + '/controllers');
  //   files.forEach(fileName => {
  //     require(__dirname + '/controllers/' + fileName);
  //   });
  // }
}
export default new App

let files = fs.readdirSync(__dirname + '/controllers');
files.forEach(fileName => {
  require(__dirname + '/controllers/' + fileName);
});
