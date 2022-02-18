---
bg: "tools.jpg"
layout: post
title: "Deeplearning On Web"
crawlertitle: "Deeplearning"
summary: "深度学习总结"
date: 2017-08-24
categories: posts
tags: ['Python技术']
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

还有L1 regularization：![image]({{site.images}}/2017-08-24/chapter3-16.png)

它规则化权重的比例是个常数，与权重大小无关。还有dropout，在训练过程中，通过隐藏或者去掉（dropout）某些神经元，使得每次训练只更新了一部分权重和偏差，这样，当预测时，使用了全部神经元，再将输出权重减半，相当于一个voting过程，预测效果通常比较好，适用于很深很大的神经网络。还有人工扩展训练集，比如这个手写识别的，通过对原训练集旋转，拉伸，缩放的手段构造更多的训练集，进行训练。

### 优化权重初始化：

之前是将权重和方差初始化为0到1之间的高斯分布，对于输入，输出的值的方差特别大。现在变成初始化为0到![image]({{site.images}}/2017-08-24/chapter3-17.png)

之间的高斯分布，减小输出的方差，更易收敛饱和。

### Momentum-based gradient descent：

将

[![image]({{site.images}}/2017-08-24/chapter3-18.png)]({{site.images}}/2017-08-24/chapter3-18.png)

改成

[![image]({{site.images}}/2017-08-24/chapter3-19.png)]({{site.images}}/2017-08-24/chapter3-19.png)

这是梯度下降的一个变种。



## Chapter4

神经网络：可以以任意精度去逼近任何连续的函数。解释神经网络可以拟合任何曲线的原因。

## Chapter5

理论上深度神经网络比浅层神经网络的学习能力更强。但是深度神经网络会导致梯度消失问题，一些层的神经元无法训练提高。

## Chapter6

#### 卷积神经网络：

三个重要的基本思想是：局部感受域，权重共享，池化。

##### 局部感受域：

对于28*28的输入层，选取一个5*5的局部区域，全连接到下一隐含层的一个神经元，然后移动窗口，再选一个5*5的局部区域，全连接到另一个隐含层神经元，以此类推。这样28*28的输入层，会产生24*24个隐含层神经元，每个隐含层神经元只与上一层对应的5*5个神经元相连接。

[![image]({{site.images}}/2017-08-24/chapter6-1.png)]({{site.images}}/2017-08-24/chapter6-1.png)

[![image]({{site.images}}/2017-08-24/chapter6-2.png)]({{site.images}}/2017-08-24/chapter6-2.png)

##### 权重共享：

隐含层神经元的输出公式为：

[![image]({{site.images}}/2017-08-24/chapter6-3.png)]({{site.images}}/2017-08-24/chapter6-3.png)

即同一个隐含层的所有神经元共享一个5*5的权重矩阵和一个偏差，因此实际上每个隐含层神经元识别的是同一个特征，整个隐含层识别的是输入层的某一种特征，因此可以生成多个隐含层，来识别多种特征。权重共享的好处在于大大地减少了需要训练的参数，加快训练过程，同时有利于构建深度的神经网络。

[![image]({{site.images}}/2017-08-24/chapter6-4.png)]({{site.images}}/2017-08-24/chapter6-4.png)

##### 池化：

通常在卷积层之后，会添加一个池化层，或者说汇聚层，它所做的工作就是简化卷积层的输出。定义个2*2的区域间隔，池化层就是将每2*2个卷积层神经元压缩为一个神经元，选择最大池化方法（ max-pooling），则会用2*2个神经元里取值最大的作为池化层的这个神经元输出，还可以选择（ L2 pooling），就是去2*2个神经元的平方和再开平方。池化层最终将原本的额24*24卷积层压缩为12*12的池化层。

[![image]({{site.images}}/2017-08-24/chapter6-5.png)]({{site.images}}/2017-08-24/chapter6-5.png)

进过卷积层的特征提取和池化层的压缩，后面可以增加一个去全连接层，就相当于之前的神经网络，但是特征已经不再是之前的28*28的图片，而是3*12*12的特征。 所以深度学习实际上是一种特征工程，提取特征的一种手段，提取特征之后，后面不仅可以借神经网络，还可以接其他的算法模型，像svm，逻辑回归。

[![image]({{site.images}}/2017-08-24/chapter6-6.png)]({{site.images}}/2017-08-24/chapter6-6.png)



完结散花。
