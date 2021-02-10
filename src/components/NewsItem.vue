<template>
  <div class="news-item" @click="favouriteNews(news.id)">
    <div class="user-profile__news">
      <div class="news-item__user">@{{ username }}</div>
      <div class="news-item__content">
        {{ news.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    news: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favouriteNews(id) {
      this.$emit("favourite", id);
    },
  },
};
</script>

<style scoped>
.news-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
}
</style>
