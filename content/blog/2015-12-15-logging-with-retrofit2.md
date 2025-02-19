---
layout: post
title: Logging with Retrofit 2
tags:
  - android
comments: true
author: mateuszklimek
date: 2015-12-14T23:00:00.000Z
meaningfullyUpdatedAt: 2015-12-14T23:00:00.000Z
image: /images/desktop-android-unit-test.jpg
published: true
language: en
---

Retrofit has been updated to 2.0 version.

It's a major change in the one of the most popular library for Android platform.

A lot of things have been changed out there but in this blog post I want to cover how to setup logging properly.

# Retrofit 1.x - old way
In Retrofit 1.x we just call:
```java
	adapter.setLogLevel(RestAdapter.LogLevel.FULL)
```

# Retrofit 2.x - new way
In Retrofit 2 you should use [HttpLoggingInterceptor](https://github.com/square/okhttp/blob/master/okhttp-logging-interceptor/src/main/java/com/squareup/okhttp/logging/HttpLoggingInterceptor.java).

Add dependency to `build.gradle`:

```groovy
compile 'com.squareup.okhttp:logging-interceptor:2.6.0'
```

Create `Retrofit` object like follow:

```java
	OkHttpClient client = new OkHttpClient();
	HttpLoggingInterceptor interceptor = new HttpLoggingInterceptor();
	interceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
	client.interceptors().add(interceptor);

	Retrofit retrofit = new Retrofit.Builder()
	        .baseUrl("https://backend.example.com")
	        .client(client)
	        .addConverterFactory(GsonConverterFactory.create())
	        .build();


	return retrofit.create(ApiClient.class);
```

`RetrofitAdapter` doesn't exsist any longer, we have `Retrofit` class instead. 

The big change is that [OkHttp](http://square.github.io/okhttp/) is required now and set as dependency for Retrofit.

The instance of `OkHttpClient` is the place where you should set up logging.

Retrofit has a dependency to OkHttp version 2.5.0, but I've tested it with LoggingIntenceptor version 2.6.0 and it works well.

It should print logs similar to the old ones from Retrofit 1.x.

Hope it helps you :)

See this post on my [personal blog](http://mklimek.github.io/logging-with-retrofit2/).



