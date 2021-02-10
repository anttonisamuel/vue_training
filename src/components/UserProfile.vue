<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{ user.username }}</h1>
      <div class="user-profile_admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile_admin-badge" v-else>
        Not Admin
      </div>
      <div class="user-profile_follower-count">
        <strong>Followers: </strong>{{ followers }}
      </div>
      <form class="user-profile_create-news" @submit.prevent="createNews">
        <label for="addNews">
          <strong>Add news</strong>
        </label>
        <textarea id="addNews" v-model="newNewsContent"></textarea>
        <div class="user-profile_create-news-type">
          <label for="addNewsType"><strong>Type</strong></label>
          <select id="addNewsType" v-model="selectedNewsType">
            <option
              :value="option.value"
              v-for="(option, index) in newsTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
    <div class="user-profile_news-wrapper">
      <NewsItem
        v-for="news in user.news"
        :key="news.id"
        :username="user.username"
        :news="news"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import NewsItem from "./NewsItem";

export default {
  name: "App",
  components: { NewsItem },
  data() {
    return {
      newNewsContent: "",
      selectedNewsType: "",
      newsTypes: [
        { value: "draft", name: "Draft" },
        { value: "dogNews", name: "Dog news" },
        { value: "catNews", name: "Cat news" },
      ],
      followers: 0,
      user: {
        id: 1,
        username: "anttonisamuel",
        firstName: "Anttoni",
        lastName: "Tukia",
        email: "anttoni.tukia@treble.fi",
        isAdmin: false,
        news: [
          { id: 1, content: "Dogs are cute" },
          { id: 2, content: "Cats are evil" },
        ],
      },
    };
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower!`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    followUser() {
      this.followers += 1;
    },
    toggleFavourite(id) {
      console.log(`Favourited news #${id}`);
    },
    createNews() {
      if (this.newNewsContent && this.selectedNewsType !== "draft") {
        this.user.news.unshift({
          id: this.user.news.length + 1,
          content: this.newNewsContent,
        });
        this.newNewsContent = "";
      }
    },
  },
  mounted() {
    this.followUser();
  },
};
</script>

<style scoped>
.user_profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile_user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  width: 250px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}

.user-profile_admin-badge {
  background: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 8 10px;
  font-weight: bold;
}

h1 {
  margin: 0;
}
</style>
