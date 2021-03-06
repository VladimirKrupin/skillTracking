import axios from 'axios';
import settings from "../../config/settings";
import env from "../../config/env";
let appSettings = settings.get(env.get());
const state = {
  lang: '',
  email: '',
  nickname: '',
  allowedLangs: '',
  // name: '',
  // surname: '',
  // gender: '',
  // age: '',
  // country: '',
  // city: '',
  // work: '',
  // position: '',
  // about: '',
  data: '',
};

const getters = {
    lang: state => state.lang,
    email: state => state.email,
    nickname: state => state.nickname,
    allowedLangs: state => state.allowedLangs,
    // name: state => state.name,
    // surname: state => state.surname,
    // gender: state => state.gender,
    // age: state => state.age,
    // country: state => state.country,
    // city: state => state.city,
    // work: state => state.work,
    // position: state => state.position,
    // about: state => state.about,
    data: state => state.data,
};

const mutations = {
    setUserData(state, payload){
        state.lang = payload.userData.lang;
        state.email = payload.userData.email;
        state.nickname = payload.userData.nickname;
        // state.name = payload.userData.name;
        // state.surname = payload.userData.surname;
        // state.gender = payload.userData.gender;
        // state.age = payload.userData.age;
        // state.country = payload.userData.country;
        // state.city = payload.userData.city;
        // state.work = payload.userData.work;
        // state.position = payload.userData.position;
        // state.about = payload.userData.about;
        state.data = payload.userData;
    },
    setLang(state, payload) {
        state.lang = payload.lang;
    },
    setAllowedLangs(state, payload) {
        state.allowedLangs = payload.allowedLangs;
    }
};

const actions = {
  setUserData(context) {
      if (localStorage.getItem('access_token') !== null){
          const options = {
              method: 'GET',
              headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token')
              },
              url: appSettings.apiHost + '/api/getUserData/',
          };
          axios(options)
              .then(response => {
                  context.commit('setUserData', { userData: response.data.data });
                  if (localStorage.getItem('lang') !== response.data.data.lang){
                      context.dispatch('changeLang', { lang: response.data.data.lang });
                  }
              })
              .catch(e => {
                  localStorage.removeItem('access_token');
                  console.log(e);
              });
      }
  },
  changeLang(context,payload) {
      localStorage.setItem('lang',payload.lang);
      context.commit('setLang', { lang: payload.lang });
  },
  setDbLang(context,payload) {
      if (localStorage.getItem('access_token') !== null){
          const options = {
              method: 'POST',
              headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token')
              },
              url: appSettings.apiHost + '/api/putLang/',
              data: {
                  lang: payload.lang
              }
          };
          axios(options)
              .then(response => {
                  console.log('Switch on '+ payload.lang);
              })
              .catch(e => {
                  console.log(e);
              });
      }
  },
  getAllowedLangs(context,payload) {
      const options = {
          method: 'GET',
          url: appSettings.apiHost + '/api/allowedLangs/',
      };
      axios(options)
          .then(response => {
              context.commit('setAllowedLangs', { allowedLangs: response.data.data.langs});
          })
          .catch(e => {
              console.log(e);
          });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
