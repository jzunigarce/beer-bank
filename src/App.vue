<template>
    <div id="app">
        <b-container fluid class="main-header pb-5">
            <b-row>
                <b-col class="px-0">
                    <nav>
                        <b-nav class="justify-content-end">
                            <b-nav-item class="nav-link" to="/">Home</b-nav-item>
                            <b-nav-item class="nav-link" to="/about">Favourite</b-nav-item>
                        </b-nav>
                    </nav>
                </b-col>
            </b-row>
            <b-row class="text-center title">
                <b-col>
                    <h1 class="text-white mb-0">The Beer Bank</h1>
                    <p class="text-white">Find your favourite beer here</p>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col md="4">
                    <b-form-input 
                    placeholder="Search for beer name"
                    class="search"></b-form-input>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="content">
            <router-view />
        </b-container>
    </div>
</template>

<style>
body {
    background-color: #f8f8f8;
}
.main-header {
    background-color: #f39301;
}
.main-header nav li {
    padding: 0.5em
}
.main-header nav li a{
    color: white;
    display: inline-block;
    text-transform: uppercase;
    padding: 0
}
.title h1 {
    font-weight: 800;
}
.main-header .search {
    border: none;
    border-radius: 0;
    box-shadow: none;
}
.content {
    padding-top: 50px;
}
</style>
