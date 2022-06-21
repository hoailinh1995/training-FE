<header id="header" class="module header font-poppins w-full relative ">
    <div class="tong lg:h-717 sm:h-1070 2xl:h-768 bg-white">
        <div class="bg-cover sm:h-1070 2xl:h-770 xx:h-927 lg:h-817 bg-white w-full relative" style="background-image: url(@asset('images/Headerbackgroundprovip.png'))">
            <div class="NoiDung">
                <div class="Tren row xx:h-44 xx:pl-393 xx:pt-5 2xl:h-46 2xl:pl-21 2xl:pt-6 border-b-1 border-white sm:h-57">
                    <div class="logo xx:w-20-per xx:ml-0 xx:pl-0  xx:pt-2 sm:ml-40 sm:mt-20 lg:pl-20 lg:pt-3 2xl:mt-0 2xl:pl-6 2xl:pt-15">
                        <img src="@asset('images/header2.png')" alt="hinh">
                    </div>
                    <div class="content hidden lg:flex xx:pl-91 row xx:pt-0 xx:w-80-per text-white 2xl:pt-17 2xl:pl-267 lg:pt-23 lg:pl-31">
                        <div class="content1 hover:text-yellow xx:w-70">
                            <button>
                                <h5>ABOUT US</h5>
                            </button>
                        </div>
                        <div class="content2 xx:w-85 2xl:pl-37 hover:text-yellow lg:pl-10">
                            <button>
                                <h5>LEADERSHIP</h5>
                            </button>
                        </div>
                        <div class="content3 xx:w-1/4 2xl:pl-32 hover:text-yellow lg:pl-25">
                            <button>
                                <h5>CAREERS</h5>
                            </button>
                        </div>
                        <div class="content4 xx:w-1/4 pl-35 xx:pl-5 hover:text-yellow">
                            <button>
                                <h5>CONTACT US</h5>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="Duoi text-white row xx:pl-20-per relative 2xl:pl-68 2xl:pt-19">
                    <div class="alpha 2xl:pt-0 2xl:w-1100  2xl:pl-0 xx:pt-5 sm:pl-76 sm:mt-73 lg:pl-60 lg:pr-508 lg:mt-47 ">
                        <div class="tieude 2xl:pr-5 sm:-mt-42 sm:text-50 sm:mr-75 sm:text-center  lg:text-left lg:pt-35 ">
                            <p>Unlock the Power of Connection</p>
                        </div>
                        <div class="noidung 2xl:pt-8 2xl:pr-82 2xl:-mt-20 ">
                            <p>Connect & Grow Your Business with the Power of the Encompass Platform</p>
                        </div>
                        <div class="nut bg-orange hover:text-yellow text-center rounded-full 2xl:mt-5 2xl:w-233 2xl:h-24 sm:w-245 sm:p-5 sm:mt-5 sm:h-26 sm:ml-63 lg:ml-0 ">
                            <button>
                                <p>ABOUT US</p>
                            </button>
                        </div>
                    </div>
                    <div class="hinh sm:left-100 sm:top-392 sm:w-909 absolute 2xl:w-1030 2xl:left-635 2xl:top-77   xx:left-900 xx:w-1030 lg:left-458 lg:top-88 lg:w-768">
                        <img src="@asset('images/header1.png')" alt="hinh">
                    </div>
                </div>
            </div>
            <div class="menu text-right absolute sm:top-25 sm:right-62 sm:text-26 lg:hidden">
                <button><span class="icomoon icon-Group-997"></span></button>
                <div class="div1 text-white"> <button>ABOUT US</button></div>
                <br>
                <div class="div2 text-white"> <button>LEADERSHIP</button></div>
                <br>
                <div class="div3 text-white"> <button>CAREERS</button></div>
                <br>
                <div class="div4 text-white"> <button>CONTACT US</button></div>
            </div>
        </div>
    </div>
</header>














<!-- <header id="header" class="module header w-full top-0 left-0 fixed z-200 down_lg:overflow-hidden">
    <div class="container">
        <div class="bg-cover " style="background-image: url(@asset('images/Headerbackgroundprovip.png'))">
            <nav class="row navbar items-center">
                <div class="col w-full down_lg:flex down_lg:flex-wrap lg:w-1/5 header-mobile relative justify-between items-center">
                    <div class="lg:w-full relative">
                        <a id="header-logo" class="navbar-brand header-logo py-5 inline-block align-middle" href="{!! App::getLogo()['href'] !!}">
                            <img src="{!! App::getLogo()['url'] !!}" alt="{!! App::getLogo()['alt'] !!}" class="w-full">
                        </a>
                    </div>
                    <div class="block lg:hidden">
                        <button class="navbar-toggler hamburger-menu p-4 mt-0 cursor-pointer" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar block bg-white relative ml-auto w-16 h-2"></span>
                            <span class="icon-bar block bg-white relative ml-auto w-16 h-2 mt-3"></span>
                            <span class="icon-bar block bg-white relative ml-auto w-16 h-2 mt-3"></span>
                            <span class="sr-only">Open Menu</span>
                        </button>
                    </div>
                </div>
                <div class="col w-full lg:w-4/5 navbar-collapse main-menu flex flex-col justify-between" id="main-menu" data-module="menu">
                    <ul class="main-menu-ul navbar-nav list-none flex mb-0 p-0 text-white flex-col text-inherit
        lg:flex-row lg:justify-end">
                        <li class="menu-item mb-0 ">
                            <a class="block py-9 lg:p-9 no-underline" href="#">ABOUT US</a>
                        </li>
                        <li class="menu-item mb-0">
                            <a class="block py-9 lg:p-9 no-underline" href="#">LEADERSHIP</a>
                        </li>
                        <li class="menu-item mb-0">
                            <a class="block py-9 lg:p-9 no-underline" href="#">CAREERS</a>
                        </li>

                        <li class="active menu-item mb-0">
                            <a class="block py-9 lg:p-9 no-underline" href="#">CONTACT US</a>
                        </li>
                        <!-- <li class="menu-item mb-0">
                        <a class="block py-9 lg:p-9 no-underline" href="#">Training</a>
                    </li> -->
<!-- </ul>
                </div>
            </nav>
        </div>
    </div>

</header> -->




<!-- <header id="header" class="module header w-full top-0 left-0 fixed z-200 down_lg:overflow-hidden">
    <div class="container">
        <nav class="row navbar items-center">
            <div class="col w-full down_lg:flex down_lg:flex-wrap lg:w-1/5 header-mobile relative justify-between items-center">
                <div class="lg:w-full relative">
                    <a id="header-logo" class="navbar-brand header-logo py-5 inline-block align-middle" href="{!! App::getLogo()['href'] !!}">
                        <img src="{!! App::getLogo()['url'] !!}" alt="{!! App::getLogo()['alt'] !!}" class="w-full">
                    </a>
                </div>
                <div class="block lg:hidden">
                    <button class="navbar-toggler hamburger-menu p-4 mt-0 cursor-pointer" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar block bg-white relative ml-auto w-16 h-2"></span>
                        <span class="icon-bar block bg-white relative ml-auto w-16 h-2 mt-3"></span>
                        <span class="icon-bar block bg-white relative ml-auto w-16 h-2 mt-3"></span>
                        <span class="sr-only">Open Menu</span>
                    </button>
                </div>
            </div>

            <div class="col w-full lg:w-4/5 navbar-collapse main-menu flex flex-col justify-between" id="main-menu" data-module="menu">
                <ul class="main-menu-ul navbar-nav list-none flex mb-0 p-0 text-white flex-col text-inherit
        lg:flex-row lg:justify-end">
                    <li class="menu-item mb-0 ">
                        <a class="block py-9 lg:p-9 no-underline" href="#">ABOUT US</a>
                    </li>
                    <li class="menu-item mb-0">
                        <a class="block py-9 lg:p-9 no-underline" href="#">LEADERSHIP</a>
                    </li>
                    <li class="menu-item mb-0">
                        <a class="block py-9 lg:p-9 no-underline" href="#">CAREERS</a>
                    </li>

                    <li class="active menu-item mb-0">
                        <a class="block py-9 lg:p-9 no-underline" href="#">CONTACT US</a>
                    </li>
                    <!-- <li class="menu-item mb-0">
                        <a class="block py-9 lg:p-9 no-underline" href="#">Training</a>
                    </li> -->
<!-- </ul>
            </div>
        </nav>
    </div>
</header> -->