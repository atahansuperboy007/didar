function Ikol(){
    return(
        <div id="container_demo" >
    <a class="hiddenanchor" id="tosubscribe"></a>
    <a class="hiddenanchor" id="tologin"></a>
    <div id="wrapper">
        <div id="login" class="animate form">
            <form  action="mysuperscript.php" autocomplete="on">
                <h1>Авторизоваться</h1>
                <p>
                    <label for="username" class="uname" data-icon="u" > Ваш адрес электронной почты или имя пользователя</label>
                    <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
                </p>
                <p>
                    <label for="password" class="youpasswd" data-icon="p"> Ваш пароль</label>
                    <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" />
                </p>
                <p class="keeplogin">
                    <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
                    <label for="loginkeeping">Держите меня в системе</label>
                </p>
                <p class="login button">
                   <input type="submit" value="Авторизоваться" />
                </p>
                <p class="change_link">
                Еще не член клуба ?
                    <a href="#tosubscribe" class="to_subscribe">Присоединяйтесь к нам</a>
                </p>
            </form>
        </div>
 
        <div id="subscribe" class="animate form">
            <form  action="mysuperscript.php" autocomplete="on">
                <h1>Зарегистрироваться</h1>
                <p>
                    <label for="usernamesignup" class="uname" data-icon="u">Ваше имя</label>
                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                </p>
                <p>
                    <label for="emailsignup" class="youmail" data-icon="e" >Ваша электронная почта</label>
                    <input id="emailsignup" name="emailsignup" required="required" type="text" placeholder="mysupermail@mail.com"/>
                </p>
                <p>
                    <label for="passwordsignup" class="youpasswd" data-icon="p">Ваш пароль </label>
                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
                </p>
                <p>
                    <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">Пожалуйста, подтвердите свой пароль</label>
                    <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
                </p>
                <p class="signin button">
                    <input type="submit" value="Зарегистрироваться"/>
                </p>
                <p class="change_link">
                Уже член клуба ?
                <a href="#tologin" class="to_subscribe"> Идите и войдите в систему</a>
                </p>
            </form>
        </div>
    </div>
</div>
        // <div className="ik">
        //     <h1>Вход</h1>
        //     <div className="ip">
        //     <input type="text" placeholder="Телефон или email" />
        //     </div>
        //     <div className="ip">
        //     <input type="text" placeholder="Пароль"/>
        //     </div>
        //     <div className="low">
        //     <div className="il">
        //         <button><a href="">Войти</a></button>
        //     </div>
        //     <div className="io">
        //     <button><a href="">Забыли пароль ?</a></button>
        //     </div>
        //     </div>
        //     <h2>Впервые сайте</h2>
        //     <p>Моментальная регистрация</p>
        //     <div className="ip">
        //     <input type="text" placeholder="Ваше имя" />
        //     </div>
        //     <div className="ip">
        //     <input type="text" placeholder="Ваше фамилия"/>
        //     </div>
        //     <div className="ip">
        //     <input type="text" placeholder="Телефон или email" />
        //     </div>
        //     <p>Дата рождения : </p>
        //     <div className="ij">
        //     <input type="text" placeholder="День"/>
        //     <input type="text" placeholder="Месяц"/>
        //     <input type="text" placeholder="Год"/>
        //     </div>
        //     <div className="ih">
        //         <button><a href="">Зарегистрироваться</a></button>
        //     </div>
        // </div>
    )
}
export default Ikol;