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

## Chapter1：

获取源码：git clone [https://github.com/mnielsen/neural-networks-and-deep-learning.git](https://github.com/mnielsen/neural-networks-and-deep-learning.git)



## Chapter2：

介绍反向传播的原理。

神经网络的学习过程：

[![image]({{site.images}}/2017-08-24/chapter2-1.png)]({{site.images}}/2017-08-24/chapter2-1.png)

## Chapter3：

### 学习缓慢问题。

输出层使用quadratic cost function时，

[![image]({{site.images}}/2017-08-24/chapter3-1.png)]({{site.images}}/2017-08-24/chapter3-1.png)

当输出结果和目标结果相差特别大时，或者说是位于sigmoid函数的两端很平滑的位置时，由于斜率很小，导致误差C对权重w和偏差b的偏导数很小，使得变化很小，学习缓慢。

[![image]({{site.images}}/2017-08-24/chapter3-2.png)]({{site.images}}/2017-08-24/chapter3-2.png)

使用cross-entropy cost function，解决学习缓慢的问题。

[![image]({{site.images}}/2017-08-24/chapter3-3.png)]({{site.images}}/2017-08-24/chapter3-3.png)

[![image]({{site.images}}/2017-08-24/chapter3-4.png)]({{site.images}}/2017-08-24/chapter3-4.png)

[![image]({{site.images}}/2017-08-24/chapter3-5.png)]({{site.images}}/2017-08-24/chapter3-5.png)

由于交叉熵误差函数对权重w和偏差b的偏导数都是关于输出结果和目标结果的函数，所以当输出结果和目标结果相差很大时，偏导数会很大，变化大，学习快。使用softmax function代替sigmoid function作为层神经元的激活函数，解决学习缓慢的问题：

[![image]({{site.images}}/2017-08-24/chapter3-6.png)]({{site.images}}/2017-08-24/chapter3-6.png)

[![image]({{site.images}}/2017-08-24/chapter3-7.png)]({{site.images}}/2017-08-24/chapter3-7.png)

[![image]({{site.images}}/2017-08-24/chapter3-8.png)]({{site.images}}/2017-08-24/chapter3-8.png)

这代表着每一层的神经元数据满足一种概率分布，这是一种很好的特征属性。定义有一个log似然损耗函数，使得损耗关于权重w和偏差 b的偏导数都是与输出结果和目标结果之间的误差相关，当误差大时学习更快。

[![image]({{site.images}}/2017-08-24/chapter3-9.png)]({{site.images}}/2017-08-24/chapter3-9.png)

### 过拟合问题：

1. 通过一个验证集来早停训练，不是训练集也不是测试集。
2. 通过增加训练集数量。
3. 通过使用L2 regularization，改变误差函数为：

[![image]({{site.images}}/2017-08-24/chapter3-10.png)]({{site.images}}/2017-08-24/chapter3-10.png)

[![image]({{site.images}}/2017-08-24/chapter3-11.png)]({{site.images}}/2017-08-24/chapter3-11.png)

[![image]({{site.images}}/2017-08-24/chapter3-12.png)]({{site.images}}/2017-08-24/chapter3-12.png)

实际上改变的是对权重w的偏导，对偏差b的偏导无影响，使得w的学习过程变成这样：

[![image]({{site.images}}/2017-08-24/chapter3-13.png)]({{site.images}}/2017-08-24/chapter3-13.png)

（SGD minbath）

[![image]({{site.images}}/2017-08-24/chapter3-14.png)]({{site.images}}/2017-08-24/chapter3-14.png)

不止用到了梯度下降学习，还通过一个因子：![image]({{site.images}}/2017-08-24/chapter3-15.png)

将w规则化，使得学习倾向于构造一个权重值较小的神经网络，构造出来的将是一个相对比较简单的神经网络，不易过拟合，按照经验，简单点的模型泛化能力更强，更倾向于实际，所以也能提高一些准确率。而对于偏差b则无需构造一个更小偏差的神经网络，影响不大。

还有L1 regularization：![image]({{site.images}}/2017-08-24/chaapter3-16.png)

它规则化权重的比例是个常数，与权重大小无关。还有dropout，在训练过程中，通过隐藏或者去掉（dropout）某些神经元，使得每次训练只更新了一部分权重和偏差，这样，当预测时，使用了全部神经元，再将输出权重减半，相当于一个voting过程，预测效果通常比较好，适用于很深很大的神经网络。还有人工扩展训练集，比如这个手写识别的，通过对原训练集旋转，拉伸，缩放的手段构造更多的训练集，进行训练。

### 优化权重初始化：

之前是将权重和方差初始化为0到1之间的高斯分布，对于输入，输出的值的方差特别大。现在变成初始化为0到![image]({{site.images}}/2017-08-24/chapter3-17.png)

之间的高斯分布，减小输出的方差，更易收敛饱和。

### Momentum-based gradient descent：

将![image]({{site.images}}/2017-08-24/chapter3-18.png)改成![image]({{site.images}}/2017-08-24/chapter3-19.png)

这是梯度下降的一个变种。