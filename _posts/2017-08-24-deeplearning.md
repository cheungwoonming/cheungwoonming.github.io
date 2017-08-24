---
bg: "tools.jpg"
layout: post
title: "Deeplearning On Web"
crawlertitle: "Deeplearning"
summary: "深度学习总结"
date: 2017-08-24
categories: posts
tags: ['python']
author: CheungWoonMing
---



资料地址：[deeplearning在线学习网站](http://neuralnetworksanddeeplearning.com)

1. Chapter1：

   获取源码：git clone [https://github.com/mnielsen/neural-networks-and-deep-learning.git](https://github.com/mnielsen/neural-networks-and-deep-learning.git)

   ​

2. Chapter2：

   介绍反向传播的原理。

   神经网络的学习过程：

   [![image]({{site.image}}/2017-08-24/chapter2-1.png)]({{site.image}}/2017-08-24/chapter2-1.png)

3. Chapter3：

   学习缓慢问题。

   输出层使用quadratic cost function时，

   [![image]({{site.image}}/2017-08-24/chapter3-1.png)]({{site.image}}/2017-08-24/chapter3-1.png)

   当输出结果和目标结果相差特别大时，或者说是位于sigmoid函数的两端很平滑的位置时，由于斜率很小，导致误差C对权重w和偏差b的偏导数很小，使得变化很小，学习缓慢。

   [![image]({site.image}/2017-08-24/chapter3-2.png)]({site.image}/2017-08-24/chapter3-2.png)

   ​