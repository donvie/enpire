<template>
  <q-layout class="bg-grey-2" view="lHr LpR lfr">
    <q-header class="bg-white" bordered>
      <q-toolbar>
        <q-btn
          v-if="$route.path !== '/' && $route.path !== '/signin' && $route.path !== '/signup' && $route.name !== 'view product' && $route.name !== 'bidding'"
          flat
          dense
          round
          color="EnpireBlack"
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="ti-menu"
          aria-label="Menu"
        />

        <!-- <q-btn label="Update Record" @click="NewPassword()" /> -->

        <q-toolbar-title>
          <img v-if="$route.path === '/' || $route.path === '/signin' || $route.path === '/signup' || $route.name === 'view product' || $route.name === 'bidding'" class="q-mt-sm" @click="$router.push('/').catch(() => {})" style="width: 180px; height: auto;" src="~assets/logoside.png">
        </q-toolbar-title>

        <q-btn
          v-if="user"
          flat
          dense
          round
          class="q-mr-sm"
          color="EnpireGold"
          to="/cart"
          icon="ti-shopping-cart"
          aria-label="Menu"
        >
          <q-badge color="BeautifindGold" floating>
            0
          </q-badge>
        </q-btn>

        <span v-if="$route.path === '/' || $route.name === 'view product' || $route.name === 'bidding'">
          <q-btn-dropdown v-if="user" dense color="EnpireBlack" flat>
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-avatar v-if="$q.screen.gt.xs" class="q-mr-xs">
                  <img style="height: 27px; width: 27px;" v-if="user && user.pic !== ''" :src="user.pic">
                  <img style="height: 27px; width: 27px;" v-else src="~assets/no-profile.jpg">
                </q-avatar>
                <div class="text-center">
                  {{user.fname}}
                </div>
              </div>
            </template>

            <q-list style="width: 200px;">
              <q-item clickable to="/dashboard" v-close-popup>
                <q-item-section>
                  <q-item-label>Account</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable @click="logOut()" v-close-popup>
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn v-else label="Login" @click="$router.push('/signin').catch(() => {})" flat text-color="EnpireGold" />
        </span>
      </q-toolbar>

      <q-banner v-if="!onLine" dense inline-actions class="text-white bg-red">
        <template v-slot:avatar>
          <q-icon size="sm" name="ti-alert" color="white" />
        </template>
        Connection Lost! You are offline.
      </q-banner>
      <q-banner v-if="showBackOnline" dense inline-actions class="text-white bg-positive">
        <template v-slot:avatar>
          <q-icon size="sm" name="ti-check" color="white" />
        </template>
        Connection Connected! You are online.
      </q-banner>

    </q-header>

    <q-footer class="bg-EnpireBlack" bordered>
      <q-toolbar>
        <q-toolbar-title class="text-caption text-center">
          Copyright © 2019 Enpire Marketing Enterprises Corporation
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

      <q-drawer
        v-if="$route.path !== '/' && $route.path !== '/signin' && $route.path !== '/signup' && $route.name !== 'view product' && $route.name !== 'bidding'"
        v-model="leftDrawerOpen"
        show-if-above
        :width="270"
        bordered
        content-class="bg-BeautifindGray text-white"
      >
        <q-scroll-area style="height: calc(100% - 170px); margin-top: 170px; border-right: .6px solid #FFFFFF">
          <q-list padding class="menu-list">
            <q-item-label header>Welcome</q-item-label>
            <q-item exact-active-class="bg-EnpireBlack text-white" exact clickable v-ripple to="/dashboard">
              <q-item-section avatar>
                <q-icon name="ti-dashboard" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Dashboard</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" exact clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="ti-home" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Store</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" clickable exact v-ripple>
              <q-item-section avatar>
                <q-icon name="ti-bar-chart-alt" />
              </q-item-section>
              <q-item-section>
                <q-item-label>My Sales Group</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" clickable to="/cart" exact v-ripple>
              <q-item-section avatar>
                <q-icon name="ti-shopping-cart-full" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Purchases</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" clickable exact v-ripple>
              <q-item-section avatar>
                <q-icon name="ti-money" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Commisions</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" clickable exact v-ripple>
              <q-item-section avatar>
                <q-icon name="ti-gift" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Incentives</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" clickable exact v-ripple>
              <q-item-section avatar>
                <q-icon name="ti-credit-card" />
              </q-item-section>
              <q-item-section>
                <q-item-label>RBP Accounts</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" clickable exact v-ripple>
              <q-item-section avatar>
                <q-icon name="ti-bag" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Stockist</q-item-label>
              </q-item-section>
            </q-item>
            <q-item exact-active-class="bg-EnpireBlack text-white" clickable exact v-ripple>
              <q-item-section avatar>
                <q-icon name="ti-ticket" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Travel & Tours</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <span class="absolute-top">
          <q-toolbar class="bg-BeautifindGray">
            <q-toolbar-title>
              <img class="q-mt-sm" @click="$router.push('/').catch(() => {})" style="width: 153px; height: auto;" src="~assets/logoside.png">
            </q-toolbar-title>
          </q-toolbar>

          <q-card square flat class="my-card bg-EnpireBlack text-white">
            <q-card-section>
              <div class="row items-center no-wrap q-col-gutter-sm">
                <div class="col-auto">
                  <q-avatar @click="$router.push('/profile').catch(() => {})" size="56px" class="q-mb-sm">
                    <img style="height: 56px; width: 56px;" v-if="user && user.pic !== ''" :src="user.pic">
                    <img v-else src="~assets/no-profile.jpg">
                  </q-avatar>
                </div>
                <div class="col">
                  <div v-if=user class="text-subtitle2">{{user.fname}} {{user.lname}}</div>
                </div>
              </div>
            </q-card-section>

            <q-card-actions class="justify-center" style="margin-top: -20px;">
              <q-btn size="sm" to="/profile" round icon="ti-user" flat />
              <q-btn size="sm" round flat icon="ti-pencil-alt" />
              <q-btn size="sm" round flat icon="ti-power-off">
                <q-menu>
                  <q-list dense>
                    <q-item @click="logOut()" clickable v-close-popup>
                      <q-item-section>Logout</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-card-actions>
          </q-card>
        </span>
      </q-drawer>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { feathersClient } from 'src/feathers-client.js'
export default {
  name: 'MyLayout',
  data () {
    return {
      onLine: navigator.onLine,
      showBackOnline: false,
      leftDrawerOpen: false
    }
  },
  mounted () {
    this.fetchUser()
    this.fetchProducts()
    this.fetchTapbidsrewards()
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
  },
  beforeDestroy () {
    window.removeEventListener('online', this.updateOnlineStatus)
    window.removeEventListener('offline', this.updateOnlineStatus)
  },
  computed: {
    user () {
      return this.$store.state.user.userData
    }
  },
  watch: {
    onLine (v) {
      if (v) {
        this.showBackOnline = true
        setTimeout(() => { this.showBackOnline = false }, 1000)
      }
    }
  },
  methods: {
    updateOnlineStatus (e) {
      const { type } = e
      this.onLine = type === 'online'
    },
    NewPassword () {
      feathersClient.service('users_tbl').find({
        query: {
          $limit: 50,
          $skip: 250,
          $sort: {
            pk: 1
          },
          username: {
            $in: [
              'jozelann',
              'anaparido',
              'anaparido',
              'kayceegromeo',
              'aprilraquel1208',
              'mtpnarag',
              'mtpascual',
              '01Gemma',
              'adlynne',
              'aileenreyes',
              'AIZA14',
              'aki08',
              'AkiArk18',
              'alice79',
              'alraine13',
              'analynviray',
              'anamarie.canlas',
              'Andrew2',
              'AndrewEnpire019',
              'Angela012',
              'angelsj1502',
              'angie27',
              'anne23',
              'applemayor',
              'archie27',
              'ardutek888',
              'Aries27',
              'ArrietCabal',
              'Arth',
              'AteBes',
              'Avigne',
              'balane40',
              'belle40',
              'benedictmayor',
              'bheng2017',
              'biancamia27',
              'biejei936',
              'Bombsquare',
              'bonniegarcia252',
              'BrandyCamus',
              'Bujoy',
              'caireann',
              'Caitlyn',
              'Charlie20',
              'Chay ramones',
              'CHRIS16',
              'ckbakatkat',
              'CManalac',
              'Coraza27',
              'criselda',
              'cristy02',
              'cristy29',
              'Crisvin',
              'CuteVinz',
              'darwin totaan',
              'daryl2019',
              'daryl27',
              'deborahli062828',
              'Del libona',
              'Dioprim',
              'dlarej',
              'Dmarctech',
              'DOC',
              'EdlynAquino',
              'ehnawhyte',
              'ejboy',
              'elde08',
              'elena',
              'eliza123',
              'eloisawayan',
              'elvie.pascual',
              'EmelynTumbaga',
              'emperatrisjulie',
              'enri',
              'ericferdinand',
              'erlaniemanalo',
              'EUGEN3',
              'EuniKaye30',
              'evelyn.tubog',
              'fe',
              'Felicidad Adora',
              'FERDIE40',
              'G8',
              'gabrap',
              'GARRY52',
              'genalyn',
              'GEORGE23',
              'Geraldine',
              'germiebensoskin',
              'ghievan',
              'Gigimizrach',
              'GioM20',
              'Glad',
              'glaizapadua',
              'GMT061216',
              'Hazel04',
              'hazelEnpire2019',
              'heartzero10',
              'HEIDZ',
              'hiedee.mendoza',
              'honeybee16',
              'Hope',
              'ian',
              'Ian Solamo',
              'jacquetavita',
              'jailie',
              'jajachavez',
              'Janice201',
              'jaypatric26',
              'Jaypee',
              'Jbeulalio',
              'jcasiong',
              'JCountLastrella',
              'jedlabrador27',
              'Jeff0108',
              'jen12185',
              'Jenayunan',
              'jeniffer56',
              'Jeraldespina',
              'jerwin.fp.23',
              'jexybilazon',
              'jhajha',
              'Jhaq',
              'Jheri',
              'Jisun',
              'Jneil',
              'JocelynLim',
              'Joel3405',
              'john0506',
              'john0803',
              'John16',
              'johnrenzogumban',
              'Jordan818',
              'jovelon27',
              'Jovelyn',
              'jovelyn.tubog',
              'joyandmariel',
              'jpsuycano',
              'JTcruz0815',
              'JULI3T',
              'JulietSantos',
              'JulioR',
              'jyrpadua',
              'Katrine',
              'kennethmenez',
              'kharel',
              'Kimmy03',
              'Lany09',
              'Lei morales',
              'LezylCrisa',
              'liannemagayo',
              'Lilibeth13',
              'LixzhelFionna',
              'Ljlaeda',
              'lorizzakaye',
              'Lowell',
              'lucilleriego',
              'LydiaCamus',
              'M3RCY',
              'Mabelalmazan',
              'MAED',
              'Mangkanor',
              'maria.isabel',
              'mariabinos',
              'Maricris1992',
              'marilyngumban',
              'mark05',
              'MarkFlores',
              'Markjerred17',
              'Marylyn',
              'matetespina',
              'Mayannvelasquez',
              'Maycell',
              'Mayline04',
              'Merian',
              'mherrydee berna',
              'mich',
              'michelle922',
              'MichelleLozada',
              'miguelito1977',
              'mika6272019',
              'mjbernardo',
              'NERY F.REYMUNDO',
              'nesh21',
              'nestor88',
              'Nikkeydismaya',
              'Nikyenateraine',
              'noeharra27',
              'Nonoy08',
              'NoyArnold',
              'pauline',
              'Pax265801',
              'peterbringera',
              'Phinejoy',
              'PrincessPiyona',
              'pusakat',
              'QueenieUy',
              'Rachelle Edos',
              'RANDY526',
              'RaquelYapparcon',
              'rauldalistan',
              'Redguy',
              'remixzzz',
              'ReneTesnado',
              'Rhonielcanites',
              'Rizalyn',
              'rjereso',
              'RLYN',
              'Roldan27',
              'rollsol2018',
              'Rose53',
              'RosegenTalisic',
              'Rosene12',
              'rubypamplona',
              'SaysonMaricel',
              'scentOFchloella',
              'scentOfmichele',
              'ScentsofCecil',
              'scentsOFcelvill',
              'scentsOFcoa',
              'scentsOFdabah',
              'scentsOFgina',
              'scentsofGly',
              'scentsOFjonna05',
              'scentsOFjulieta',
              'scentsOFjvill',
              'scentsOFlizabet',
              'scentsOFmizrach',
              'scentsOFmylene',
              'scentsOFnora24',
              'scentsOFpia',
              'scentsOFroblaus',
              'scentsOFshayne0',
              'scentsOFshin',
              'Sgcarrera123',
              'Shainalouise',
              'Sharmyne',
              'sharonmarindo',
              'SONNY25',
              'suegalang',
              'susangalang',
              'tenspeed03',
              'test106160119',
              'thata27',
              'Thel26',
              'tinepancipane',
              'tita2018',
              'trishamaedumot',
              'Trix0508',
              'Venus',
              'Venusjavier',
              'vervena27',
              'vhilsanchez',
              'viarmelvin',
              'VillarealJo',
              'VyLab',
              'Winedilberto03',
              'WinJennelyn',
              'Winrita22',
              'xia',
              'ycel',
              'YellowDragon',
              'Yesha0525',
              'Yols',
              'Yow!!',
              'Yvone28',
              'yvonne28',
              'zelana',
              'zet',
              'Zhai',
              'zildcrew',
              'Inday18',
              'WinBentrago',
              'Roxie',
              'Archier1299',
              'mgcmonje',
              'Ara71',
              'Mavie06',
              'Del libona',
              'GLEND4'
            ]
          }
        }
      }).then(data => {
        console.log(data)
        data.data.forEach((element, index) => {
          feathersClient.service('users_tbl').patch(element.pk, { new_password: element.unhashed }).then(data => {
            console.log('patched', index, element)
          })
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    updateRecord () {
      // feathersClient.service('rewardpts_tbl').find({
      //   query: {
      //     reward_fr: 'miguelito1977',
      //     reward_to: 'miguelito1977',
      //     $limit: 29,
      //     $sort: {
      //       date_created: -1
      //     }
      //   }
      // }).then(data => {
      //   console.log(data)
      //   data.data.forEach((element, index) => {
      //     feathersClient.service('rewardpts_tbl').remove(element.pk).then(data => {
      //       console.log(index)
      //     }).catch((error) => {
      //       console.log(error)
      //     })
      //   })
      // })

      // feathersClient.service('tapbids_tbl').find({
      //   query: {
      //     taprewardid: 6,
      //     $limit: 50,
      //     $sort: {
      //       date_created: -1
      //     }
      //   }
      // }).then(data => {
      //   console.log(data)
      //   data.data.forEach((element, index) => {
      //     feathersClient.service('tapbids_tbl').remove(element.pk).then(data => {
      //       console.log(index)
      //     }).catch((error) => {
      //       console.log(error)
      //     })
      //   })
      // })

      // feathersClient.services['tapbidsrewards_tbl'].patch(7, {
      //   tap_stop: '2019-10-11T06:10:00.000Z'
      // }).then(data => {
      //   console.log(data)
      // })
    },
    fetchUser () {
      this.$store.dispatch('user/fetchUser')
    },
    fetchTapbidsrewards () {
      this.$store.dispatch('tapbidsrewards/fetchTapbidsrewards')
    },
    fetchProducts () {
      this.$store.dispatch('stproducts/fetchProducts')
    },
    logOut () {
      this.$store.dispatch('user/logOut')
    }
  }
}
</script>

<style lang="sass" scoped>
  .page-container
    max-width: 960px;
    margin: auto;
  .menu-list .q-item
    border-radius: 0 32px 32px 0
  .q-item.q-router-link--active, .q-item--active
    border-left: 5px solid #f2cf4f;
</style>
