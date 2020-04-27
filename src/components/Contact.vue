<template>
  <div
    id="contact"
    class="Section"
  >
    <h1>
      Contact
    </h1>
    <div class="contact-list">
      <p>お名前<input class="contactform"></p>
      <!-- <input>要素を追加してください -->


      <p>メールアドレス（必須）<input class="contactform"></p>
      <!-- <input>要素を追加してください -->


      <p>お問い合わせ内容（必須）<textarea class="contactform contactotoi" /></p>
      <!-- <textarea>要素を追加してください -->

      <!-- <input>要素を追加してください -->
      <input
        class="contact-submit"
        type="submit"
        value="送信"
      >
    </div>
  </div>
</template>>

<script>

</script>

<style scoped>
#contact {
  text-align: left;
  border-bottom: none;
}

.contact-submit {
  background: #89ddf1;
  color: black;
  border-radius: 9%;
  width: 20%;
}

.contact-submit:active {
  box-shadow: none;
  position: relative;
  top: 3px;
}

.contactform {
  border: 1px solid gray;
  margin-left: 20px;
}

.contactotoi {
  vertical-align: middle;
}

@media screen and (min-width: 980px) {
  #contact {
    padding: 0 130px 50px 220px;
    width: 100%;
  }
}
</style>
