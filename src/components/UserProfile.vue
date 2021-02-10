<template>
  <div class="user-profile">
    <div class="user-panel">
      <h1 class="username">{{ fullName }}</h1>
      <div class="admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="admin-badge" v-else>
        Not Admin
      </div>
      <form
        class="create-news"
        @submit.prevent="createNews"
        :class="{
          '--exceeded': contentCharCount > 1000 || headerCharCount > 50,
        }"
      >
        <label for="addNewsHeader">
          <strong>Add news header</strong> ({{ headerCharCount }}/50)
        </label>
        <textarea
          id="addNewsHeader"
          rows="3"
          v-model="newNewsHeader"
        ></textarea>

        <label for="addNewsContent">
          <strong>Add news content</strong> ({{ contentCharCount }}/1000)
        </label>
        <textarea id="addNews" rows="6" v-model="newNewsContent"></textarea>

        <div class="create-news-type">
          <label for="addNewsType"><strong>Type</strong></label>
          <select id="addNewsType" v-model="selectedNewsType">
            <option
              :value="option.name"
              v-for="(option, index) in newsTypes"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button>Publish</button>
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
//import {reactive} from 'vue';

export default {
  name: "UserProfile",
  //setup() {
  //  const state = reactive({
  //
  //  })
  //},
  components: { NewsItem },
  data() {
    return {
      newNewsHeader: "",
      newNewsContent: "",
      selectedNewsType: "",
      newsTypes: [
        { value: "draft", name: "Draft" },
        { value: "dogNews", name: "Dog news" },
        { value: "catNews", name: "Cat news" },
      ],
      user: {
        id: 1,
        username: "anttonisamuel",
        firstName: "Anttoni",
        lastName: "Tukia",
        email: "anttoni.tukia@treble.fi",
        isAdmin: true,
        news: [],
      },
    };
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    headerCharCount() {
      return this.newNewsHeader.length;
    },
    contentCharCount() {
      return this.newNewsContent.length;
    },
  },
  methods: {
    toggleFavourite(id) {
      console.log(`Favourited news #${id}`);
    },
    createNews() {
      if (
        this.newNewsContent &&
        this.newNewsHeader &&
        this.selectedNewsType !== "Draft"
      ) {
        this.user.news.unshift({
          id: this.user.news.length + 1,
          header: this.newNewsHeader,
          type: this.selectedNewsType,
          content: this.newNewsContent,
        });
        this.newNewsHeader = "";
        this.newNewsContent = "";
      }
    },
  },
  mounted() {
    this.user.news.unshift(
      {
        id: 1,
        header: "Dogs are cute",
        type: this.newsTypes[1].name,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        header: "Cats are evil",
        type: this.newsTypes[2].name,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
  }

  .user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    width: 600px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
  }

  .admin-badge {
    background: rebeccapurple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    padding: 8 10px;
    font-weight: bold;
  }

  .create-news {
    padding-top: 20px;
    display: flex;
    flex-direction: column;

    &.--exceeded {
      color: red;
      border-color: red;
    }
  }

  h1 {
    margin: 0;
  }
}
</style>
