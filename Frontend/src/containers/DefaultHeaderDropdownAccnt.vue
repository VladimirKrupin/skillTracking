<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
      src="img/avatars/no-pick.svg"
      class="img-avatar"
      alt="no-pick.svg" />
    </template>
    <template slot="dropdown">
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>{{$lang.defaultAside.settings}}</strong>
      </b-dropdown-header>
      <b-dropdown-item :to="{name:'profile'}"><i class="fa fa-user" />{{$lang.nav.profile}}</b-dropdown-item>
      <b-dropdown-item :to="{name:'changePassword'}"><i class="fa fa-wrench" />{{$lang.nav.change_pass}}</b-dropdown-item>
      <b-dropdown-item  v-on:click="logout"><i class="fa fa-lock" />{{$lang.nav.logout}}</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    logout: function (event) {
      event.preventDefault();
      localStorage.removeItem('access_token');
      window.location.href = '/';
    }
  }
}
</script>
