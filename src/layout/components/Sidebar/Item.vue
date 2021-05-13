<template>
  <i v-if="icon" :class="icon"></i>
  <span v-if="title" slot='title'>{{title}}</span>
</template>
      

<script>
export default {
  name: "MenuItem",
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  // render(h, context) {
  //   const { icon, title } = context.props;
  //   const vnodes = [];

  //   if (icon) {
  //     vnodes.push(<i class={icon}></i>)
  //   }

  //   if (title) {
  //     vnodes.push(<span slot='title'>{(title)}</span>)
  //   }
  //   return vnodes;
  // },
};
</script>
