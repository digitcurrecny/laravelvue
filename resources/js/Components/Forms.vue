<template>
  <div>
    <div class="form-group">
      <router-link class="btn btn-success" :to="{ name: 'companiesIndex' }"
        >Back To Lit</router-link
      >
    </div>

    <form @submit.prevent="validate">
      <div class="panel panel-default">
        <div class="panel-heading">Create new company</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Company name</label>
              <input type="text" v-model="form.name" class="form-control" />
              <div class="form-text text-danger">{{ form.nameErrorText }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Company address</label>
              <input type="text" v-model="form.address" class="form-control" />
              <div class="form-text text-danger">
                {{ form.addressErrorText }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Company website</label>
              <input type="text" v-model="form.website" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 form-group">
              <label class="control-label">Company email</label>
              <input type="text" v-model="form.email" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 form-group">
              <button class="btn btn-success">Create</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Forms",
  props: {
    buttenLoading: Boolean,
    post: Object,
  },

  setup(props, { emit }) {
    const form = reactive({
      name: "",
      address: "",
      website: "",
      email: "",
      nameErrorText: "",
      addressErrorText: "",
    });

    function setInpute() {
      console.log(props.post);
      if (props.post !== undefined) {
        form.name = props.post.name;
        form.address = props.post.address;
        form.website = props.post.website;
        form.email = props.post.email;

      }
    }
    setInpute();

    function validate() {
      if (form.name === "") {
        form.nameErrorText = "name is Required";
      } else {
        form.nameErrorText = "";
      }

      if (form.address === "") {
        form.addressErrorText = "address is Required";
      } else {
        form.addressErrorText = "";
      }

      if (form.address !== "" && form.name !== "") {
        emit("formData", form);
      }
    }

    return { form, validate };
  },
};
</script>

<style>
</style>
