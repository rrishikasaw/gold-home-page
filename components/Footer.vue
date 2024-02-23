<template>
  <footer class="bg-black py-4">
    <v-row justify="center">
      <v-col cols="11" md="6">
        <div class="flex fz-14 text-grey-lighten-4 mb-2">
          <img src="~/assets/image/logo/logo.png" alt="" width="30">
          <p class="mb-0 ml-2">Gold Investments</p>
        </div>

        <p class="text-grey fz-15">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga, ipsa laborum ullam, ad mollitia harum quas cupiditate nulla ab id deserunt! Blanditiis nihil fugiat tempore sed provident harum placeat.</p>
      </v-col>
      <v-col cols="11" md="4">
        <div class="flex fz-14 text-grey-lighten-4 mb-2">
          <p class="mb-0">Quick Links</p>
        </div>

        <div class="flex flex-wrap">
          <a class="text-grey fz-15 td-none mr-2" href="#">Home</a>
          <a class="text-grey fz-15 td-none mr-2" href="#">Corporate</a>
          <a class="text-grey fz-15 td-none mr-2" href="#">Investors</a>
          <a class="text-grey fz-15 td-none mr-2" href="#">Projects</a>
          <a class="text-grey fz-15 td-none mr-2" href="#">Contact</a>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="11" md="10">
        <v-sheet class="bg-grey-darken-4 px-14 py-6">
          <v-row align="center">
            <v-col cols="12" md="9">
              <div class="flex align-center">
                <v-btn icon="mdi-at" size="x-small" color="var(--theme)" class="mr-2"></v-btn>
                <div class="text-grey-lighten-3">
                  <p class="mb-0 fw-bold">Join our Mailing List</p>
                  <p class="mb-0 fz-16">No spam! Only important company updates</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <v-btn color="var(--theme)" size="small">
                <Icon name="mdi:bell-badge-outline" class="fz-14 text-black mr-1" />
                Subscribe Now
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

    <p class="text-grey fz-15 text-center mt-4 mb-0">&copy; 2024 Barrancogold &nbsp;&nbsp;&nbsp; All rights reserved</p>
</footer>
</template>
