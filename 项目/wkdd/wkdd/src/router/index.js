import Vue from 'vue'
import Router from 'vue-router'
import Message from '../components/mainPages/Message'
import GroupChat from '../components/mainPages/GroupChat'
import ContactList from '../components/mainPages/ContactList'
import Information from '../components/mainPages/Information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'message',
      component:Message
    },
    {
      path: '/groupChat',
      name: 'groupChat',
      component:GroupChat
    },
    {
      path: '/contactList',
      name: 'contactList',
      component:ContactList
    },
    {
      path: '/information',
      name: 'information',
      component:Information
    }
  ]
})
