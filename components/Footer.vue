<!-- @format -->

<script setup></script>

<template>
  <div>
    <div class="bg-[url('/image/gradientBg.png')] content-none bg-cover">
      <div
        class="flex flex-col justify-center items-center p-8 text-white text-center"
      >
        <p class="text-6xl mt-8 font-bold">
          Find activities that are suitable for you !
        </p>
        <p class="text-2xl mt-4">
          Are you still looking for the perfect activity to join?<br />
          Here we are ! A platform that offers a variety of activities<br />
          just waiting for YOU to regitered ! <br />
          UnityDo !
        </p>
      </div>
      <img src="/image/handedVector.png" class="w-full bottom-0" />
    </div>

    <div class="mx-auto pt-12 pb-24">
      <p class="m-10 text-6xl font-bold text-unityDo-primary">
        What is UnityDo ?
      </p>
      <div class="h-180 flex flex-row">
        <div class="w-2/5 ml-44">
          <img src="/image/unityDoHomepage.png" class="  " />
        </div>
        <div class="w-3/2">
          <div class="flex flex-col p-8">
            <p class="text-3xl font-bold">Uniting for a better YOU</p>
            <p class="text-2xl mt-4 text-unityDo-cyan font-bold r">
              We are website that offers a variety of activities
              <br />
              created by reliable activity owners<br />
              to U who are interested in participating in activities.<br />
            </p>
            <p class="mt-4 text-unityDo-cyan">
              "UnityDo" benefits everyone <br />
              Activity owners can publish activities that demand participation
              here.<br />
              All participants will be able to register, participate in each
              activity, and experience UnityDo's recommendation system!
            </p>
            <div class="pt-4">
              <ViewAllActivityButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
