<script setup lang="ts">
</script>

<template>
  <main>
    <h1>
      Contact Info
    </h1>

    <hr>

    <ul class="contact no-bullets">
      <li>
        <a href="https://www.linkedin.com/in/ben-j-nichols/" target="_blank">
          <i class="bi bi-linkedin"></i>
          <span class="text">
        https://www.linkedin.com/in/ben-j-nichols/
        </span>
        </a>
      </li>
      <li>
        <a href="mailto:mail@ben-nichols.net" target="_blank">
          <i class="bi bi-envelope"></i>
          <span class="text">
        mail@ben-nichols.net
        </span>
        </a>
      </li>
    </ul>

    <hr>
  </main>
</template>

<style>

.contact .text {
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
}
.contact {
  list-style: none;
}

.contact i {
  font-size: 30px;
}

.contact a{
  font-size: 15px;
  display: block;
  line-height: 32px;
  margin-bottom: 20px;
  opacity: 0.6;


}


.contact a i {
  margin-right: 20px;
}
</style>
