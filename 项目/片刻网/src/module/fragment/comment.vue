<template>
    <div class="publish-timeline">
      <div class="now-date">
        <span class="day">{{day}}</span>
        <span class="date-English">{{month}}</span>
      </div>
      <div class="publist-content">
        <textarea maxlength="140" placeholder="这一刻，你想说什么?"></textarea>
        <div class="timeline-othres">
          <div class="timeline-type" id="timeline-type">
            <span class="greenBgc" @click="activeClass">公开</span>
            <span @click="activeClass">秘密</span>
          </div>
          <div class="upload-img">
            <img src="../../assets/img-icon.png" alt="" class="uploadimg">
            <input type="file" accept="image/jpg,image/png,image/gif" id="imgFile" title="">
            <label for="imgFile" id="spanPic">图片</label>
          </div>
          <div class="timeline-tag">
            <div class="tag-icon"><span id="jing" style="color: #F6A737">#</span><span id="addtag">添加标签</span></div>
            <div class="tag-menu"></div>
          </div>
          <div class="timeline-word-number">
            <span id="textCount">0</span>/140
            <span>字</span>
          </div>
          <div class="timeline-btn" id="timeline-btn">发布碎片</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data:function () {
          return {
            day:this.$util.params.getParams().day,
            month:this.$util.params.getParams().month,
            flag:true
          }
        },
      methods:{
        oninput:function () {
          var textArea = document.getElementsByTagName("textarea")[0];
          textArea.addEventListener('input',function () {
            //改变字数
            let len = $("textArea").val().length;
            if (len <= 140) {
              $("#textCount").html(len);
            } else {
              $(this).val($(this).val().substring(0,140));
            }

            if (textArea.value) {
              textArea.style.border = "1px solid #75BE88";
            } else {
              textArea.style.border = "1px solid #E8E8E8";
            }
          });
        },
        activeClass:function (ev) {
          var spans = $("#timeline-type").find("span");
          spans.attr('class','');
          ev.target.className = "greenBgc";

          if (this.flag) {
            $("#jing").css('color','#EEEEEE');
            $("#addtag").text('秘密');
            $("#timeline-btn").html('匿名发布');
            $("textarea").attr('placeholder','以匿名的方式倾诉，我们会将你的秘密随机推送给5位陌生人');
            this.flag = false;
          } else {
            $("#jing").css('color','#F6A737');
            $("#addtag").html('添加标签');
            $("#timeline-btn").html('发布碎片');
            $("textarea").attr('placeholder','这一刻，你想说什么?');
            this.flag = true;
          }
        }
      },
      mounted:function () {
        this.oninput();
      }
    }
</script>

<style scoped>
  .publish-timeline {
    width: 1200px;
    height: 220px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
  }
  .now-date {
    width: 220px;
    height: 220px;
    position: relative;
  }
  .day {
    position: absolute;
    font-size: 100px;
    font-weight: bolder;
    top: 0;
    left: 60px;
  }
  .date-English {
    position: absolute;
    top: 60%;
    left: 60%;
  }
  .publist-content {
    width: 930px;
    height: 220px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  textarea {
    width: 846px;
    height: 83px;
    resize: none;
    outline: none;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    padding: 20px;
  }
  textarea::-webkit-input-placeholder {
    font-size: 1.4em;
    color: #D2D2D2;
    font-weight: lighter;
  }
  .timeline-othres {
    width: 846px;
    height: 36px;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .timeline-type {
    width: 82px;
    height: 26px;
    border-radius: 5px;
    border: 2px solid #75BE88;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .timeline-type span {
    width: 37.5px;
    height: 19px;
    border-radius: 3px;
    font-size: 0.8em;
    text-align: center;
    line-height: 19px;
  }
  .upload-img {
    width: 55px;
    height: 36px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .uploadimg {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
  }
  #imgFile {
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    opacity: 0;
  }
  #spanPic {
    height: 20px;
    position: absolute;
    right: 0;
    font-size: 0.9em;
  }
  .upload-img:hover,
  .uploadimg:hover,
  #imgFile:hover,
  #spanPic:hover {
    cursor: pointer;
  }
  .timeline-tag {
    width: 108px;
    height: 36px;
  }
  .tag-icon {
    width: 76px;
    height: 36px;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    margin-left: 35px;
  }
  .timeline-btn {
    width: 96px;
    height: 36px;
    border-radius: 18px;
    background-color: #75BE88;
    color: white;
    text-align: center;
    line-height: 36px;
    font-size: 0.9em;
    font-weight: lighter;
    margin-left: 40px;
  }
  .timeline-word-number {
    width: 70px;
    height: 36px;
    font-size: 0.8em;
    line-height: 36px;
    margin-left: 380px;
  }
  .greenBgc {
    background-color: #75BE88;
    color: white;
  }
  #jing {
    margin-right: 8px;
  }

</style>
