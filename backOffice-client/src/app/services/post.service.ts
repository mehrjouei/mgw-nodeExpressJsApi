import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CustomAuthHttp } from "./customeAuthHttp.service";
import { ConfigService } from "./config.service";
import { Post } from '../viewModels/post';


@Injectable()
export class PostService {
    private Config;

    constructor(private authHttp: CustomAuthHttp, private configService: ConfigService) {
        this.Config = configService.Get();

    }
    getPosts(): Promise<any> {
        return this.authHttp.get(this.Config.API_Url + '/posts/list/')
            .toPromise()
            .then(response => {
                return response.json() as Post[];
            }
            )
            .catch();
    }
}