//支持异步更改state,实际的作用是调用mutations,即通过异步调用mutations来实现异步改值
export default {
  //content: 是个对象，例如{name:123, age:232, commit:fn} 在其中只引用commit
  nameAsyn(commit,person) {
    setTimeout(function () {
      commit.commit('SET_NAME',person);
    },1000)
  }
}
