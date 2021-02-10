<template>
  <div class="news-item" @click="favouriteNews(news.id)">
    <div class="user-profile__news">
      <div class="news-header">{{ news.header }}</div>
      <div class="news-type">
        {{ news.type }}
      </div>
      <div class="news-content">
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

<style lang="scss" scoped>
.news-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    transform: scale(1.01, 1.01);
  }
  .news-header {
    font-weight: bold;
    padding-bottom: 10px;
  }
  .news-type {
    padding-bottom: 10px;
  }
}
</style>
