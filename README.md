# select.js
ul li编写的select插件
## 用法
##### 引入的文件
```
<link rel="stylesheet" href="css/select.css">
<script src="js/jquery-1.12.2.min.js"></script>
<script src="js/selectJquery.js"></script>
```

#### HTML代码 HTML codes
```
<div class="select-container"></div>
```


#### Javascript代码 Javascript codes

```
var selectData = {
            data: [
                { name: "---", value: '5' }, {
                    name: "累计10000以上",
                    value: '-1'
                }, {
                    name: "5k-1w",
                    value: '7'
                }, {
                    name: "1k-5k",
                    value: '8'
                }, {
                    name: "100-1k",
                    value: '9'
                },],
            title: '充值金额'
        },

var select = new Select($('.select-container'), {
            data: selectData.data,
            title: selectData.title
        }, function(value) {
            console.log(value)
        });

```

###### 设置vaue
```
select.setSelectValue(data);
```
###### 获取vaue 传给后台的值
```
select.getSelectValue();
```


