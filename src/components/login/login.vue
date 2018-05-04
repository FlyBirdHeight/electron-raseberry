<template>
    <div class="login-wrap">
        <div class="ms-title">码立方后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.email" placeholder="email"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm">登录(测试)</el-button>
                </div>
            </el-form>
        </div>
        <div id="particles" style="background-color:#ffffff;"></div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    email: '',
                    password: ''
                },
                rules: {
                    email: [
                        { required: true, message: '请输入邮箱或手机号码', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm() {
                this.axios.post('/api/login',{
                    'email':this.ruleForm.email,'password':this.ruleForm.password
                }).then((response) => {
                    if(response.data.status=="success"){
                        sessionStorage.setItem('user',JSON.stringify(response.data.userInfo));
                        sessionStorage.setItem('shopInfo',JSON.stringify(response.data.shopInfo));
                        var data = response.data.token;
                        this.axios.defaults.headers.common['Authorization'] = data.token_type + ' ' + data.access_token;
                        sessionStorage.setItem('token',data.token_type + ' ' + data.access_token);
                        this.$router.push('/shopIndex');
                    }else{
                        console.log(response.data);
                    }
                }).catch((error) => {
                     console.log(error)
                })
            },
        },
        mounted(){
            particlesJS.load('particles',"http://p53z0yfgy.bkt.clouddn.com/data01.json");
        }
    }
</script>

<style scoped>
    .login-wrap{
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #303133;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }

    #particles-js {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        background-image: url('');
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        z-index: -999;
    }
</style>