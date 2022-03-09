const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">mens</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>

        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>

</div>
<p class="footer-title">about company</p>
<!---lorem100-->
<P class="info">Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Fuga reiciendis
    itaque quaerat esse labore ullam illum 
    repudiandae, nesciunt natus cupiditate doloribus
    praesentium cumque, laborum odio sunt dolore 
    nisi nostrum rerum eum, officiis consectetur. 
    Ab laborum placeat fugit numquam quidem reprehenderit
    illum perferendis, delectus eveniet illo ex repudiandae
    id, hic non impedit, recusandae velit blanditiis quia 
    ratione ut nostrum temporibus? Corporis consectetur magni 
    repudiandae corrupti aliquid, nesciunt quae. Accusantium ab,
    quia obcaecati dolor unde ut iusto odit et commodi illum, vitae
    laboriosam, assumenda cupiditate corrupti iste distinctio voluptate
    nesciunt harum ducimus adipisci! Aperiam nam ipsam totam quas molestiae,
     deserunt quibusdam enim.</P> 
     <p class="info">support emails - help@clothing.com,
     customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 01 01 001 </p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & conditions</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, best apparels online store</p>
    
    `;
}

createFooter();