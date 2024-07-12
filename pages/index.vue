<template>
  <div class="custom-container">
    <div class="learning-video-trainers">
      <div class="learning-video-trainers__head">
        <div class="flex learning-video-trainers__title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            class="svg-blue"
          >
            <path
              d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z"
            />
          </svg>
          学習ステップ動画を観てミッションを達成しよう！
        </div>
        <div class="flex gap-2 lead">
          <span class="px-2 pill-blue">学習ステップ DAY1</span>
          <p class="font-bold">お気に入りトレーナーを探そう!</p>
        </div>
      </div>
      <div class="learning-video-trainers__lead-area">
        <div class="relative flex cursor-pointer grow" @click="openModal">
          <img
            src="~/assets/images/image/img_learning_video.png"
            alt="Video Thumbnail"
            class="w-full animated-img"
          />
        </div>
        <div v-if="isModalOpen" class="modal" @click="closeModal">
          <div class="modal-content">
            <iframe
              :src="videoUrl"
              frameborder="0"
              allowfullscreen
              class="video-frame"
            />
            <button class="close-button" @click="closeModal">&times;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data() {
    return {
      isModalOpen: false,
      videoUrl:
        'https://eqa899tizf.eq.webcdn.stream.ne.jp/www50/eqa899tizf/jmc_pub/jmc_swf/player/player_3_2_0/onetag_t3.html?b=eqa899tizf.eq.webcdn.stream.ne.jp/www50/eqa899tizf/jmc_pub/jmc_swf/player/&c=MTI3NA%3D%3D&m=MTgzMA%3D%3D&s=%7Bel%3A%20off%2Chp%3A%20395%2Cil%3A%20off%2Crb%3A%20off%2Csn%3A%20%2Ctg%3A%20off%2Cwp%3A%20600%2Cpr%3A%200.75%2C1.25%2C1.5%2C1.75%2C2.0%7D&eqplcid=oj7RA33ZwoFjb4jWDIfz615zE5eLtO9c&eqplsid=KHzKCshTLcb1iLiLA9cRjVPhLkQQZfdS&default_quality=2&parent_url=https%3A%2F%2Fwww.bizmates.jp%2FMyBizmates%2Fhome&domain=https%3A%2F%2Fwww.bizmates.jp%2FMyBizmates%2Fhome&ref=https%3A%2F%2Fwww.bizmates.jp%2F&CookieDomain=.bizmates.jp&useShortcutKey=on&tagType=player_3_2_0',
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
  },
}
</script>

<style scoped lang="scss">
.flex {
  display: flex;
}
.custom-container {
  padding: 20px;
}
.learning-video-trainers {
  $this: &;
  &__head {
    margin-bottom: 17px;
  }
  &__title {
    color: #141821;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @at-root .#{$sp} & {
      font-size: 14px;
      font-weight: 600;
    }
  }
  &__lead-area {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    .lead {
      line-height: (17/11);
      font-size: 1.1rem;
      @at-root .promotion & {
        display: none;
      }
    }
    .link-helper {
      margin-top: 10px;
      line-height: (19/13);
      font-size: 1.1rem;
      cursor: pointer;
      &:first-child {
        margin-top: 0;
      }
      a {
        display: inline-flex;
        align-items: center;
        color: #7f8288;
        @at-root .#{$pc} & {
          justify-content: flex-end;
        }
        &:hover {
          @at-root .#{$pc} & {
            opacity: $opacity;
          }
        }
      }
      .mark {
        flex-shrink: 0;
        margin-right: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: $color-brand;
        color: $color-white;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }

    @at-root .#{$sp} & {
      display: none;
    }
  }
  &--promotion {
    @at-root .#{$pc} & {
      padding: 0;
    }
    @at-root .#{$sp} & {
      padding: 0;
    }
    #{$this}__head {
      @at-root .#{$sp} & {
        display: block;
      }
    }
    .learning-video {
      .body {
        @at-root .#{$pc} & {
          height: 296px;
        }
      }
    }
  }
}

.pill-blue {
  background: $color-brand;
  color: #fff;
  padding: 0 1rem;
  margin-right: 16px;
}

.text-blue {
  color: $color-brand;
}

.w-full {
  width: 100%;
}

.padding-custom {
  padding: 12px;
}

.margin-custom {
  margin: 12px;
}

.flex-col {
  flex-direction: column;
}

.grow {
  flex-grow: 1;
}

.svg-blue {
  fill: $color-brand;
}

.text-brand {
  color: $color-brand;
}

.border-brand-bottom {
  border-bottom: 1px solid $color-border;
}

.text-section {
  width: 75%;
}

.animated-img {
  transition: transform $transition $easing, opacity $transition $easing;
  border: 0.3rem solid $color-brand-other;
}

.animated-img:hover {
  opacity: 0.8;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-frame {
    width: 100%;
    height: 100%;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
}
</style>
