# Asp.NETCore 2.1 Vue 2 Starter - by [DevHelp.Online](http://www.DevHelp.Online)

This repo contains an ASP.NET Core + Vue.js 2 starter template (VS2017 or command line). The template is based
on the [original starter templates](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/) (Angular, Knockout, React, Aurelia), which can be found [here](https://github.com/aspnet/JavaScriptServices/tree/dev/templates)

_Looking for ASP.NET Core & Angular 2.x+ Universal starter? [click here](https://github.com/MarkPieszak/aspnetcore-angular2-universal)_
 
---

# Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Extras](#extras)
* [Special Thanks](#special-thanks)
* [License](#license)
* [Social Media](#follow-me-online)
* [VueJS & ASP.NET Consulting & training](#Training)

# Features

- **ASP.NET Core 2.1**
  - Web API
- **VueJS 2**
  - Vuex (State Store)
- **Webpack**
  - HMR (Hot Module Replacement/Reloading)
- **Bootstrap 4**

# Prerequisites:
 * [.Net Core 2.1](https://www.microsoft.com/net/download/windows)
 * [NodeJS](https://nodejs.org/) >= 8.9.4
 * [VSCode](https://code.visualstudio.com/) (ideally), or VS2017

# Installation:
 * Install the template from nuget: `dotnet new -i aspnetcore-vuejs`
 
# Getting Started:
 * Create folder from template: `dotnet new vuejs` ([Official documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore2x))
   * This will automatically run `dotnet restore` unless you install with `dotnet new vuejs --skipRestore`
 * Restore Node dependencies by running `npm install`

## Start the application:
You have two choices when it come at how your preffer to run it. You can either use the command line or the build-in run command.

### 1. Using the command line
Run the application using `dotnet run` or `npm run dev`
- note `dotnet run` should be run in `Development` environment for hot reloading. This setting can be set either within the command line or via the `launchSettings.json` available in the `Properties` folder.
 
### 2. Using the built-in run command
Run the application in VSCode or Visual Studio 2017 by hitting `F5`.

## View your application running
Browse to [http://localhost:5000](http://localhost:5000)

# Recommended plugin for debugging VueJS

- Get Chrome DevTools for VueJS [here](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

----

# Found a Bug? Want to Contribute?

Nothing's ever perfect, but please let me know by creating an issue (make sure there isn't an existing one about it already), and we'll try and work out a fix for it! If you have any good ideas, or want to contribute, feel free to either make an Issue with the Proposal, or just make a PR from your Fork.

----

### Special Thanks

Many thanks go out to Steve Sanderson (@SteveSandersonMS) from Microsoft and his amazing work on [JavaScriptServices](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/) and integrating the world of Node with ASP.NET Core.

### Also, a million thanks to key Contributors ! 

- [@Nordes](https://github.com/Nordes) :sparkles:
- [@mika76](https://github.com/mika76) :sparkles:
- [@vip32](https://github.com/vip32) :sparkles:
- [@anderly](https://github.com/anderly) :sparkles:

----

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE) 

Copyright (c) 2016-2018 [Mark Pieszak](https://github.com/MarkPieszak)

### Follow me online:

Twitter: [@MarkPieszak](http://twitter.com/MarkPieszak) | Medium: [@MarkPieszak](https://medium.com/@MarkPieszak)

----

<a name="Training"/>

# DevHelp.Online - VueJS & ASP.NET - Consulting | Training | Development

Check out **[www.DevHelp.Online](http://DevHelp.Online)** for more info! Twitter [@DevHelpOnline](https://twitter.com/DevHelpOnline)

Contact us at <hello@devhelp.online>, and let's talk about your projects needs.

<p align="center">
    <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/768119/images/4272479/Screen_Shot_2017-10-27_at_6.58.34_PM.png" alt="DevHelp.Online - Angular ASPNET JavaScript Consulting Development and Training">
</p>
