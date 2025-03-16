# Landing Page Project


https://github.com/user-attachments/assets/5c98f3c9-978e-496c-8904-01eb2fdc3159


## Table of Contents

- [Global Variables](#Global-Variables)
- [Main Functions](#Main-Functions)
  - [onClickMenu](#onClickMenu)
  - [activate](#activate)
  - [scrollTarget](#scrollTarget)
- [Events](#Events)
  - [navigation Bar item clicked](#navigation-Bar-item-clicked)
  - [window is scrolled](#window-is-scrolled)

## Global Variables

the sections of the page at the var `sectionN`
an the navigation links an the var `navBtns` or `navBtnN`

> note: `N` is number

## Main Functions

the main functions that i use in my project

### onClickMenu

function fire when the burger icon is clicked
with no `args`
to toggle the navbar on or off

#### vars

`menu` : the contairner of the burger icon bars

`nav` : the container of the navigation links

`navGrid` : the fansy background of the nav
`blurBG` : the blur background **works only on chrome**

change the menu from burger icon to X

show the menu items

show the menu background grid

blur the back ground

### activate

actiave the section in view

when scroll this function fire and active the
section in view by adding call `active`

### scrollTarget

take the Id of the target from the passed element
then add scroll to that element

## Events

### navigation Bar item `clicked`

call the function [scrollTarget](#scrollTarget) and pass the navigation link

### window is `scrolled`

call the function [activate](#activate)
