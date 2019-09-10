import settings from "../config/settings";
import env from "../config/env";
let appSettings = settings.get(env.get());

export default {
    get: function(){
        return {
            data: function () {
                return {
                    apiHost: appSettings.apiHost,
                    frontHost: appSettings.frontHost,
                    socials: {
                        'git':'https://github.com/VladimirKrupin/skill-tracking.ru',
                        'vk':'https://vk.com/?id=244842255',
                        'fb':'https://www.facebook.com/profile.php?id=100021975798495',
                        'inst':'https://www.instagram.com/vladimir_togliatti/',
                        'tw':'https://twitter.com/Vladimir_Krpn',
                        'coders_link':'https://vk.com/?id=244842255',
                        'about_us':'https://vk.com/?id=244842255',
                        'news':'https://vk.com/?id=244842255',
                        'mit':'https://github.com/VladimirKrupin/skill-tracking.ru/blob/master/LICENSE',
                    },
                    defaultHeaders: {
                        'Lang':localStorage.getItem('lang'),
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                    }
                }
            },
            methods: {
                validEmail: function (email) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                },
                logged: function () {
                    return (
                        localStorage.getItem('access_token') !== null &&
                        localStorage.getItem('access_token') !== undefined &&
                        localStorage.getItem('access_token') !== 'undefined'
                    );
                }
            }
        }
    }
}