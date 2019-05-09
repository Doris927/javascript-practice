# 在HTML中使用Javascript
- 使用<script>元素
- 嵌入脚本与外部脚本
- 文档模式对JavaScript的影响
- 考虑禁用JavaScript的场景
## <script>元素
- 属性 async, charset, defer, type
- 两种引用方法
- 可以引用外部域的js文件
- 如果不存在async和defer标签， 浏览器会按照<script>标签的出现顺序加载
- 标签的位置（放在body中可以让用户感受到加载速度的加快）
- 延迟脚本（外部） defer="defer" 立即加载但延迟执行
- 异步脚本（外部） async 可以在下载脚本的同时，异步加载页面的其他内容

## 嵌入代码与外部文件
最好使用外部文件 可维护性，可缓存， 适应未来

## 文档模式
通过文档类型（doctype）切换来实现的

## <noscript>元素
禁止使用脚本



