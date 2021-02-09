import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// faltaba importar firebase y configurar el proyecto
import firebase from 'firebase/app'

// configurando proyecto
const firebaseConfig = {
    apiKey: "AIzaSyCvOGepVV8UdQNv2W-RQtOF7bln4IVFsRk",
    authDomain: "recursos-const.firebaseapp.com",
    databaseURL: "https://recursos-const-default-rtdb.firebaseio.com",
    projectId: "recursos-const",
    storageBucket: "recursos-const.appspot.com",
    messagingSenderId: "691913815415",
    appId: "1:691913815415:web:c59690e770718c6f03dd72",
    measurementId: "G-85QBP0953L"
};

// Aquí se linkea el proyecto con firebase usando la configuración correcta
firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
