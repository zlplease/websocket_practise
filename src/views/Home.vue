<template>
  <div id="app">
    <div class="chat">
      <div class="title">
        <p>{{ otherName }}</p>
        <button class="choose" @click="changeUser">切换用户</button>
      </div>
      <div class="chatView">
        <vuescroll :ops="ops">
          <div
            class="item my text"
            v-for="(item, index) in msgList"
            :class="{ my: item.uid === uid, other: item.uid !== uid }"
            :key="index"
          >
            <div class="userInfo">
              <div class="avater">{{ item.nickname }}</div>
              <div class="name">{{ item.nickname }}</div>
            </div>
            <div class="contentInfo">
              <div class="Text">{{ item.content }}</div>
            </div>
          </div>
        </vuescroll>
      </div>
      <!-- 为啥用tabindex会被覆盖 -->
      <div class="op">
        <textarea v-model="msg" id="input"> </textarea>
        <button>发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import vuescroll from "vuescroll";

export default {
  name: "Home",
  components: {
    vuescroll,
  },
  data() {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          background: "#c1c1c1",
        },
      },
      uid: 2,
      otherName: "涛",
      msg: "",
      msgList: [
        {
          uid: 1,
          nickname: "鸿",
          content: "康康现在几点了复习完了嘛",
        },
        {
          uid: 2,
          nickname: "涛",
          content: "别骂了别骂了",
        },
        {
          uid: 2,
          nickname: "涛",
          content:
            ".....................aabadjkakldakdklakdhalkdjaabadjkakldakdklakdhalkdjaabadjkakldakdklakdhalkdjaabadjkakldakdklakdhalkdjaabadjkakldakdklakdhalkdjaabadjkakldakdklakdhalkdjaabadjkakldakdklakdhalkdj..............................................aabadjkakldakdklakdhalkdj",
        },
        {
          uid: 2,
          nickname: "涛",
          content: "test",
        },
        {
          uid: 2,
          nickname: "涛",
          content: "test",
        },
      ],
    };
  },
  methods: {
    changeUser() {
      // console.log(res)
      if (this.uid === 1) {
        this.uid = 2;
        this.otherName = "涛";
      } else {
        this.uid = 1;
        this.otherName = "鸿";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/earth.jpg");
  background-size: 100% 100%;
}

.chat {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  .title {
    width: 100%;
    flex: 0 0 8%;
    background-color: #e6e6e6;
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    border-bottom: solid;
    border-color: #dbdbdb;
    position: relative;
    p {
      font-size: 14px;
      padding-left: 24px;
      font-weight: bold;
    }
  }
}

.choose {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4%;
  width: 12%;
  height: 24px;
  background-color: rgb(98, 128, 250);
  border-radius: 40px;
  border: none;
  outline: none;
  font-size: 10px;
  color: white;
  margin: 4px;
  &:hover {
    background-color: rgb(35, 77, 243);
  }
}

.chatView {
  width: 100%;
  flex: 0 0 68%;
  background-color: #e6e6e6;
  border-bottom: solid;
  border-color: #dbdbdb;
  overflow: hidden;
}

.op {
  width: 100%;
  height: 24%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0 0 8px 8px;
  position: relative;
  outline: none;
  button {
    width: 60px;
    height: 24px;
    border-radius: 24px;
    border: none;
    outline: none;
    background-color: rgb(78, 110, 242);
    color: white;
    position: absolute;
    right: 4%;
    bottom: 10%;
    font-size: 6px;
    &:hover {
      background-color: rgb(35, 77, 243);
    }
  }
  textarea {
    width: 98%;
    height: 64%;
    resize: none;
    outline: none;
    border: none;
    font-size: 14px;
    background-color: transparent;
    padding-left: 2%;
    padding-top: 2%;
  }
}

.item {
  width: 95%;
  margin: 6px 0 6px 0;
  .userInfo {
    font-size: 12px;
    display: flex;
    .avater {
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      background-color: rgb(98, 128, 250);
      color: white;
    }
    .name {
      height: 28px;
      line-height: 28px;
    }
  }
  .contentInfo {
    padding: 10px;
    border-radius: 4px;
    max-width: 50%;
    word-break: break-all;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    font-size: 8px;
  }
}

.my {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  .userInfo {
    display: flex;
    flex-direction: row-reverse;
    .avater {
      margin-left: 8px;
    }
  }
  .contentInfo {
    background-color: #95ec69;
    margin-right: 30px;
  }
}

.other {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .userInfo {
    display: flex;
    flex-direction: row;
    .avater {
      margin-right: 8px;
    }
  }
  .contentInfo {
    background-color: #8a8a8a;
    color: white;
    margin-left: 40px;
  }
}

@media screen and(max-width: 375px) {
  .chat {
    width: 100%;
    height: 100%;
    .title {
      border-radius: 0;
    }
  }
  .op {
    border-radius: 0;
  }
  .choose {
    width: 20%;
  }
}

@media screen and(max-width: 1024px) {
  .chat {
    width: 100%;
    height: 100%;
    .title {
      border-radius: 0;
      height: 6%;
    }
  }
  .op {
    border-radius: 0;
  }
}
</style>
