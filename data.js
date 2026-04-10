// 酷酷虎电商网站 - 商品数据
// 服装类电商平台

const CATEGORIES = [
  { id: 'womens', name: '女装', icon: '👗', color: '#ec4899' },
  { id: 'mens', name: '男装', icon: '👔', color: '#3b82f6' },
  { id: 'shoes', name: '鞋靴', icon: '👟', color: '#10b981' },
  { id: 'bags', name: '箱包皮具', icon: '👜', color: '#f59e0b' },
  { id: 'accessories', name: '配饰', icon: '⌚', color: '#8b5cf6' },
  { id: 'sportswear', name: '运动服饰', icon: '⚽', color: '#06b6d4' },
  { id: 'kids', name: '童装童鞋', icon: '🧸', color: '#f43f5e' },
  { id: 'underwear', name: '内衣家居', icon: '🩱', color: '#84cc16' },
  { id: 'maternity', name: '孕产用品', icon: '🤰', color: '#fb923c' },
  { id: 'luxury', name: '轻奢精品', icon: '💎', color: '#64748b' }
];

// 真实服装商品数据 - 图片与商品匹配
const PRODUCTS_DATA = {
  // ==================== 女装 ====================
  womens: [
    { name: '法式复古碎花连衣裙2024新款夏', price: 289, originalPrice: 599, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { name: '韩版气质通勤西装外套女春秋', price: 359, originalPrice: 698, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '高腰直筒阔腿裤女春秋款', price: 169, originalPrice: 359, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop' },
    { name: '宽松百搭针织开衫女2024新款', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop' },
    { name: '轻奢真丝衬衫女高端上衣', price: 459, originalPrice: 899, image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=800&fit=crop' },
    { name: '修身显瘦小黑裙及膝连衣裙', price: 249, originalPrice: 499, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop' },
    { name: '慵懒风卫衣女宽松连帽2024', price: 159, originalPrice: 329, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '雪纺碎花半身裙长裙夏', price: 179, originalPrice: 369, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj73?w=600&h=800&fit=crop' },
    { name: '复古格纹西装套装女职业装', price: 429, originalPrice: 858, image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop' },
    { name: '蕾丝拼接荷叶边上衣女气质', price: 189, originalPrice: 389, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop' },
    { name: '波点雪纺衫女短袖上衣', price: 139, originalPrice: 289, image: 'https://images.unsplash.com/photo-1551163943-3f7fb896e5ef?w=600&h=800&fit=crop' },
    { name: 'A字伞裙高腰半身裙春秋', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?w=600&h=800&fit=crop' },
    { name: '学院风百褶裙女学生短裙', price: 129, originalPrice: 269, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop' },
    { name: '民族风刺绣长裙度假连衣裙', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '韩版简约纯棉T恤女短袖', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop' },
    { name: '性感V领紧身包臀裙晚礼服', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop' },
    { name: '文艺棉麻连衣裙中长款夏', price: 219, originalPrice: 439, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop' },
    { name: '重工亮片流苏派对连衣裙', price: 459, originalPrice: 899, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop' },
    { name: '法式方领泡泡袖上衣女', price: 179, originalPrice: 359, image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop' },
    { name: '垂感阔腿裤女高腰直筒裤', price: 149, originalPrice: 299, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop' },
    { name: '减龄背带裤女连体裤2024', price: 239, originalPrice: 479, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop' },
    { name: '气质喇叭裤女微喇西装裤', price: 189, originalPrice: 389, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop' },
    { name: '港风复古撞色拼接T恤女', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop' },
    { name: '高级感醋酸缎面吊带裙', price: 329, originalPrice: 659, image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&h=800&fit=crop' },
    { name: '通勤OL职业装女西装裙', price: 279, originalPrice: 559, image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&h=800&fit=crop' },
    { name: '仙女风网纱蓬蓬裙礼服', price: 499, originalPrice: 999, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop' },
    { name: 'ins超火露肩一字领上衣', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=800&fit=crop' },
    { name: '日系复古灯芯绒半身裙', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&h=800&fit=crop' },
    { name: '法式慵懒风针织毛衣女', price: 229, originalPrice: 459, image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop' },
    { name: '改良旗袍复古连衣裙女', price: 379, originalPrice: 759, image: 'https://images.unsplash.com/photo-1544042264-33507cacf2cd?w=600&h=800&fit=crop' }
  ],

  // ==================== 男装 ====================
  mens: [
    { name: '纯棉商务休闲衬衫男长袖', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop' },
    { name: '男士修身直筒休闲裤西裤', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop' },
    { name: '纯棉圆领短袖T恤男打底', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop' },
    { name: '高端羊毛大衣男中长款冬', price: 899, originalPrice: 1799, image: 'https://images.unsplash.com/photo-1544923246-77307dd628b0?w=600&h=800&fit=crop' },
    { name: '韩版修身小脚牛仔裤男', price: 189, originalPrice: 379, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop' },
    { name: '针织开衫男士休闲毛衣', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop' },
    { name: 'Polo衫男翻领商务休闲', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop' },
    { name: '加绒保暖内衣套装男冬', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '运动套装男休闲套装2024', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '工装裤男多口袋休闲裤', price: 189, originalPrice: 379, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop' },
    { name: '西装套装男结婚礼服商务', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop' },
    { name: '卫衣男连帽宽松潮牌', price: 219, originalPrice: 439, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop' },
    { name: '皮夹克男机车PU外套', price: 459, originalPrice: 919, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop' },
    { name: '格子衬衫男长袖休闲', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&h=800&fit=crop' },
    { name: '羊绒衫男高领保暖毛衣', price: 459, originalPrice: 919, image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop' },
    { name: '棒球服男运动外套夹克', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '沙滩裤男五分裤休闲裤', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop' },
    { name: '商务正装衬衫男白色', price: 189, originalPrice: 379, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=800&fit=crop' },
    { name: '灯芯绒休闲裤男直筒裤', price: 179, originalPrice: 359, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop' },
    { name: '连帽风衣男中长款外套', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop' },
    { name: '打底衫男长袖T恤圆领', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '毛呢大衣男双面呢大衣', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1544923246-77307dd628b0?w=600&h=800&fit=crop' },
    { name: '背心男运动健身无袖衫', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1586363104862-3a2e844f52b4?w=600&h=800&fit=crop' },
    { name: '牛仔外套男春秋宽松', price: 289, originalPrice: 579, image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&h=800&fit=crop' },
    { name: '印花T恤男潮流短袖', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop' },
    { name: '中山装男改良汉服唐装', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop' },
    { name: '针织马甲男叠穿坎肩', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop' },
    { name: '运动短裤男五分裤速干', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop' },
    { name: '加厚羽绒服男中长款冬', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1544923246-77307dd628b0?w=600&h=800&fit=crop' },
    { name: '韩版修身西服男小西装', price: 459, originalPrice: 919, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop' }
  ],

  // ==================== 鞋靴 ====================
  shoes: [
    { name: '运动鞋女跑步鞋透气轻便', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop' },
    { name: '真皮休闲皮鞋男商务正装', price: 359, originalPrice: 719, image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=800&fit=crop' },
    { name: '小白鞋女百搭板鞋帆布鞋', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop' },
    { name: '高跟鞋女细跟尖头职业装', price: 289, originalPrice: 579, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop' },
    { name: '老爹鞋女复古厚底运动鞋', price: 329, originalPrice: 659, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=800&fit=crop' },
    { name: '马丁靴女英伦风短靴春秋', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop' },
    { name: '跑步鞋男碳板竞速跑鞋', price: 499, originalPrice: 999, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop' },
    { name: '乐福鞋男一脚蹬豆豆鞋', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&h=800&fit=crop' },
    { name: '帆布鞋女高帮潮牌板鞋', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop' },
    { name: '凉鞋女夏天罗马鞋粗跟', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=800&fit=crop' },
    { name: '雪地靴女冬季加绒保暖', price: 289, originalPrice: 579, image: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=600&h=800&fit=crop' },
    { name: '运动板鞋男潮流休闲鞋', price: 279, originalPrice: 559, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=800&fit=crop' },
    { name: '拖鞋女家居浴室防滑凉拖', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1584735555981-5b4f9da8c30b?w=600&h=800&fit=crop' },
    { name: '商务正装男鞋黑色皮鞋', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=800&fit=crop' },
    { name: '松糕鞋女厚底增高休闲鞋', price: 219, originalPrice: 439, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop' },
    { name: '登山鞋男防水户外徒步鞋', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=800&fit=crop' },
    { name: '平底单鞋女软底舒适', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=800&fit=crop' },
    { name: '增高运动鞋男隐形内增高', price: 289, originalPrice: 579, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop' },
    { name: '鱼嘴鞋女凉鞋高跟职业', price: 239, originalPrice: 479, image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=800&fit=crop' },
    { name: '帆布鞋男低帮经典款', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=800&fit=crop' },
    { name: '毛毛鞋女懒人一脚蹬冬', price: 189, originalPrice: 379, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=800&fit=crop' },
    { name: '篮球鞋男专业实战球鞋', price: 499, originalPrice: 999, image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&h=800&fit=crop' },
    { name: '奶奶鞋女舒适平底单鞋', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=800&fit=crop' },
    { name: '切尔西靴男英伦风短靴', price: 329, originalPrice: 659, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop' },
    { name: '坡跟凉鞋女夏天罗马鞋', price: 179, originalPrice: 359, image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=800&fit=crop' },
    { name: '足球鞋男钉鞋人造草坪', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=800&fit=crop' },
    { name: '绣花鞋女中国风民族风', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop' },
    { name: '工装靴男复古高帮鞋', price: 359, originalPrice: 719, image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=800&fit=crop' },
    { name: '婚鞋女高跟水晶亮片', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop' },
    { name: '滑板鞋男专业刷街DC', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop' }
  ],

  // ==================== 箱包皮具 ====================
  bags: [
    { name: '轻奢手提包女单肩斜挎包', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '男士商务公文包真皮电脑包', price: 499, originalPrice: 999, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '双肩包女大学生背包旅行', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '钱包女长款真皮拉链款', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop' },
    { name: '男士手包潮流手拿包', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '小方包女2024新款迷你', price: 229, originalPrice: 459, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '旅行箱20寸登机箱万向轮', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&h=800&fit=crop' },
    { name: '妈咪包双肩背带大容量', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '卡包女名片夹薄款', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop' },
    { name: '男士斜挎包单肩包休闲', price: 239, originalPrice: 479, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '水桶包女2024新款时尚', price: 289, originalPrice: 579, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '腰包男运动防盗手机包', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '托特包女职场通勤大包', price: 329, originalPrice: 659, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '钱包男长款头层牛皮', price: 289, originalPrice: 579, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop' },
    { name: '链条包女斜挎单肩小包', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '商务拉杆箱男26寸出差', price: 459, originalPrice: 919, image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&h=800&fit=crop' },
    { name: '饺子包女手提斜挎两用', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '男士胸包多功能防盗', price: 179, originalPrice: 359, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '波士顿包女手提大包', price: 329, originalPrice: 659, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '零钱包女可爱卡通钥匙包', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop' },
    { name: '波士顿包男健身运动包', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '手提旅行包女短途出差', price: 229, originalPrice: 459, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '信封包女 clutch晚宴手拿', price: 289, originalPrice: 579, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '电脑包男15.6寸防震', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '马鞍包女斜挎复古', price: 269, originalPrice: 539, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '帆布包男单肩斜挎', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '贝壳包女经典款式', price: 329, originalPrice: 659, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '证件包男多功能卡片包', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop' },
    { name: '果冻包女透明PVC时尚', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '邮差包男复古单肩帆布', price: 189, originalPrice: 379, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' }
  ],

  // ==================== 配饰 ====================
  accessories: [
    { name: '皮带女装饰腰带百搭', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '领带男商务条纹真丝', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop' },
    { name: '围巾女冬季保暖加厚', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '手表男自动机械表防水', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop' },
    { name: '棒球帽男女同款弯檐帽', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '丝巾女真丝披肩防晒', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '腰带男真皮自动扣', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '耳钉女银饰简约气质', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' },
    { name: '项链女锁骨链吊坠', price: 149, originalPrice: 299, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
    { name: '手套女保暖加绒防滑', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '手表女时尚潮流石英表', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop' },
    { name: '帽子男鸭舌帽休闲运动', price: 69, originalPrice: 139, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '发饰女发夹刘海夹套装', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop' },
    { name: '袖扣男商务礼服配饰', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop' },
    { name: '防晒帽女大沿遮阳帽', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '戒指女银饰开口可调', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop' },
    { name: '围巾男冬季保暖毛线', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '手链女钛钢简约时尚', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop' },
    { name: '披肩女空调房薄款披风', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '帽子女贝雷帽文艺复古', price: 69, originalPrice: 139, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '胸针女复古胸花别针', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop' },
    { name: '领结男蝴蝶结婚礼配饰', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop' },
    { name: '发带女运动头箍宽边', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop' },
    { name: '袜子男纯棉中筒商务', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' },
    { name: '耳环女长款流苏耳坠', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' },
    { name: '帽子女渔夫帽防晒遮阳', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '袜子女纯棉短袜堆堆袜', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' },
    { name: '头绳女简约橡皮筋发圈', price: 19, originalPrice: 39, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop' },
    { name: '手套男开车真皮驾驶', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '丝巾男领巾装饰领带', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' }
  ],

  // ==================== 运动服饰 ====================
  sportswear: [
    { name: '运动T恤女健身跑步吸汗', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '瑜伽服女套装高弹速干', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '运动短裤男五分健身裤', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop' },
    { name: '健身服女运动内衣跑步', price: 149, originalPrice: 299, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '运动外套男春秋防风', price: 229, originalPrice: 459, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '泳衣女分体保守遮肚', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop' },
    { name: '运动长裤男训练健身', price: 179, originalPrice: 359, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop' },
    { name: '冲锋衣女三合一可拆卸', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '羽毛球服男运动套装', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '瑜伽裤女高腰提臀紧身', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '足球服男套装运动球衣', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '运动卫衣女宽松连帽', price: 189, originalPrice: 379, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '骑行服男专业公路车', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '塑身衣女美体收腹塑形', price: 149, originalPrice: 299, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '篮球服男套装球衣印字', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '健身背心男运动训练', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '泳裤男平角沙滩裤', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop' },
    { name: '运动打底裤女踩脚健身', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '登山服男户外保暖', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '网球服女运动裙装', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '速干T恤男健身跑步', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '舞蹈服女练功服形体', price: 119, originalPrice: 239, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '滑雪服男专业户外防水', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '运动T恤男吸湿排汗', price: 109, originalPrice: 219, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '减肥服女暴汗服跑步', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '运动休闲裤男收口', price: 149, originalPrice: 299, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop' },
    { name: '瑜伽内衣女高强度支撑', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop' },
    { name: '棒球服男运动外套', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '肚皮舞服女印度风格', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' }
  ],

  // ==================== 童装童鞋 ====================
  kids: [
    { name: '女童公主裙演出礼服', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop' },
    { name: '男童运动套装春秋款', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=800&fit=crop' },
    { name: '女童打底裤外穿春秋', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '男童运动鞋休闲板鞋', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop' },
    { name: '女童连衣裙碎花裙夏', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop' },
    { name: '男童棉服羽绒服冬装', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '女童凉鞋公主鞋夏季', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop' },
    { name: '男童牛仔裤小脚裤', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop' },
    { name: '女童毛衣针织开衫', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop' },
    { name: '男童凉鞋防滑沙滩鞋', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop' },
    { name: '女童背带裤连体裤', price: 109, originalPrice: 219, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop' },
    { name: '男童卫衣套装运动', price: 119, originalPrice: 239, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop' },
    { name: '女童皮鞋公主鞋演出', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop' },
    { name: '男童棉马甲保暖外套', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '女童泳衣比基尼套装', price: 69, originalPrice: 139, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop' },
    { name: '男童雨靴防滑水靴', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=600&h=800&fit=crop' },
    { name: '女童T恤短袖纯棉', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop' },
    { name: '男童滑雪服套装冬', price: 259, originalPrice: 519, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '女童家居服睡衣套装', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '男童棉袜中筒袜5双', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' },
    { name: '女童棒球帽鸭舌帽', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '男童内裤纯棉三角', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女童围巾围脖保暖', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '男童书包双肩背包', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '女童袜子堆堆袜3双', price: 25, originalPrice: 49, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' },
    { name: '男童围巾毛线保暖', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '女童发饰发夹套装', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop' },
    { name: '男童手套保暖加绒', price: 35, originalPrice: 69, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '女童打底衫长袖T恤', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop' },
    { name: '男童袜子棉袜5双装', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' }
  ],

  // ==================== 内衣家居 ====================
  underwear: [
    { name: '无钢圈文胸女聚拢调整', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '纯棉内裤女透气三条装', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '男士内裤男平角纯棉', price: 69, originalPrice: 139, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士睡衣套装家居服', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '男士睡衣套装男居家服', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '塑身内衣女收腹提臀', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '保暖内衣女加绒加厚', price: 119, originalPrice: 239, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '男士保暖内衣套装加绒', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士睡袍浴袍性感', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '男士睡袍浴袍商务', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士丝袜连裤袜防勾丝', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '男士背心运动健身', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士吊带睡裙性感', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '男士沙滩裤休闲五分裤', price: 69, originalPrice: 139, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '哺乳文胸产妇喂奶内衣', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士家居服套装春秋', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '男士平角内裤礼盒装', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士打底裤外穿薄款', price: 69, originalPrice: 139, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '男士袜子棉袜商务', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' },
    { name: '女士袜子短袜纯棉', price: 35, originalPrice: 69, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' },
    { name: '女士内衣套装黑色', price: 119, originalPrice: 239, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '男士内裤透气冰丝', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士塑身衣连体瘦身', price: 149, originalPrice: 299, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士睡帽发帽护发', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '男士秋裤保暖打底裤', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士浴帽防水防潮', price: 19, originalPrice: 39, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士裹胸抹胸打底', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '男士汗衫背心老头衫', price: 25, originalPrice: 49, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '女士卡通睡衣套装', price: 109, originalPrice: 219, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '女士长筒袜性感丝袜', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' }
  ],

  // ==================== 孕产用品 ====================
  maternity: [
    { name: '孕妇连衣裙夏款宽松', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '孕妇裤托腹裤春秋', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { name: '哺乳文胸产妇喂奶内衣', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '孕妇装上衣宽松T恤', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '孕妇内裤高腰托腹', price: 59, originalPrice: 119, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '月子服哺乳睡衣套装', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '孕妇打底裤外穿春秋', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '孕妇连衣裙秋款时尚', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { name: '产妇待产包全套入院', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop' },
    { name: '孕妇装套装背带裤', price: 149, originalPrice: 299, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { name: '哺乳衣外出喂奶衫', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '孕妇内衣无钢圈聚拢', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '孕妇秋衣秋裤保暖', price: 119, originalPrice: 239, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '孕妇装半身裙春秋', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { name: '产妇塑身衣收腹恢复', price: 159, originalPrice: 319, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '孕妇外套风衣春秋', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '孕妇打底衫长袖T恤', price: 79, originalPrice: 159, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '月子鞋软底防滑包跟', price: 49, originalPrice: 99, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop' },
    { name: '孕妇装毛衣针织开衫', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop' },
    { name: '产妇卫生巾计量型', price: 39, originalPrice: 79, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=800&fit=crop' },
    { name: '孕妇牛仔裤高腰托腹', price: 139, originalPrice: 279, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop' },
    { name: '哺乳枕护颈椎喂奶', price: 89, originalPrice: 179, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '孕妇棉服羽绒服冬装', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop' },
    { name: '产后收腹带束腰塑身', price: 99, originalPrice: 199, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '孕妇裙裤安全裤防走光', price: 69, originalPrice: 139, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' },
    { name: '月子帽产妇头巾', price: 29, originalPrice: 59, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '孕妇泳衣保守遮肚', price: 119, originalPrice: 239, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop' },
    { name: '防辐射服孕妇装上班', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop' },
    { name: '孕妇内衣套装哺乳', price: 129, originalPrice: 259, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop' },
    { name: '孕妇装套装两件套春秋', price: 169, originalPrice: 339, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop' }
  ],

  // ==================== 轻奢精品 ====================
  luxury: [
    { name: '轻奢手提包女品牌单肩包', price: 899, originalPrice: 1799, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '真皮皮带男自动扣', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '品牌丝巾女真丝披肩', price: 459, originalPrice: 919, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '瑞士手表男机械表', price: 2999, originalPrice: 5999, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop' },
    { name: '品牌钱包女长款真皮', price: 599, originalPrice: 1199, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop' },
    { name: '轻奢项链女镶钻吊坠', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
    { name: '品牌领带男真丝条纹', price: 359, originalPrice: 719, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop' },
    { name: '轻奢耳钉女钻石耳饰', price: 499, originalPrice: 999, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' },
    { name: '品牌手拿包男商务', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '轻奢戒指女铂金对戒', price: 1299, originalPrice: 2599, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop' },
    { name: '女士手提包品牌斜挎', price: 799, originalPrice: 1599, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '轻奢围巾男羊绒', price: 599, originalPrice: 1199, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '品牌背包男双肩商务', price: 899, originalPrice: 1799, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '轻奢胸针女高档配饰', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop' },
    { name: '女士腕表品牌时装表', price: 1599, originalPrice: 3199, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop' },
    { name: '轻奢手链女玫瑰金', price: 499, originalPrice: 999, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop' },
    { name: '品牌卡包名片夹', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=800&fit=crop' },
    { name: '轻奢眼镜男太阳镜', price: 699, originalPrice: 1399, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop' },
    { name: '女士斜挎包品牌单肩', price: 999, originalPrice: 1999, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '轻奢手套女真皮', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '品牌腰带女装饰', price: 399, originalPrice: 799, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '轻奢帽子男礼帽', price: 499, originalPrice: 999, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop' },
    { name: '女士晚宴包手拿包', price: 799, originalPrice: 1599, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '轻奢袜子男礼盒装', price: 199, originalPrice: 399, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=800&fit=crop' },
    { name: '品牌袖扣男商务', price: 299, originalPrice: 599, image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&h=800&fit=crop' },
    { name: '轻奢女包链条小方包', price: 899, originalPrice: 1799, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' },
    { name: '品牌丝巾男领巾', price: 359, originalPrice: 719, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop' },
    { name: '轻奢眼镜女太阳镜', price: 599, originalPrice: 1199, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop' },
    { name: '女士公文包品牌', price: 1299, originalPrice: 2599, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop' },
    { name: '轻奢皮具礼盒套装', price: 1599, originalPrice: 3199, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop' }
  ]
};

// 生成商品数据
function generateProducts() {
  const products = [];
  let id = 1;

  CATEGORIES.forEach(category => {
    const categoryProducts = PRODUCTS_DATA[category.id];
    if (!categoryProducts) return;

    categoryProducts.forEach((item, index) => {
      const discount = item.originalPrice > item.price ? Math.round((1 - item.price / item.originalPrice) * 100) : null;
      const sales = Math.floor(Math.random() * 5000) + 100;
      const rating = (Math.random() * 1.5 + 4).toFixed(1);

      products.push({
        id: id++,
        name: item.name,
        category: category.id,
        categoryName: category.name,
        price: item.price,
        originalPrice: item.originalPrice > item.price ? item.originalPrice : null,
        discount: discount,
        rating: parseFloat(rating),
        sales: sales,
        stock: Math.floor(Math.random() * 300) + 50,
        description: `${item.name}，精选优质面料，做工精细，穿着舒适。时尚百搭，适合多种场合。品牌品质保障，值得信赖。`,
        images: [item.image, item.image, item.image, item.image],
        specs: [
          { label: '品牌', value: '酷酷虎自营' },
          { label: '材质', value: '优质面料' },
          { label: '适用季节', value: getSeason(item.name) },
          { label: '洗涤说明', value: '手洗/机洗' }
        ],
        tags: ['正品保证', '全国联保', '七天无理由', '酷酷虎精选'],
        isHot: sales > 3000 || index < 3,
        isNew: Math.random() > 0.7,
        isFlashSale: Math.random() > 0.85,
        flashSalePrice: Math.random() > 0.85 ? Math.floor(item.price * 0.7) : null,
        createdAt: Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
      });
    });
  });

  return products;
}

// 判断适用季节
function getSeason(productName) {
  const winterKeywords = ['冬', '加绒', '加厚', '保暖', '羽绒服', '棉服', '雪地靴', '围巾', '手套', '帽子'];
  const summerKeywords = ['夏', '短袖', '凉鞋', '凉鞋', '防晒', '泳衣', '吊带', '碎花', '雪纺'];
  
  for (const kw of winterKeywords) {
    if (productName.includes(kw)) return '冬季';
  }
  for (const kw of summerKeywords) {
    if (productName.includes(kw)) return '夏季';
  }
  return '四季通用';
}

// 轮播图数据
const BANNERS = [
  {
    id: 1,
    title: '春季新品上市',
    subtitle: '全场服饰低至5折',
    description: '焕新衣橱，从这里开始',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=600&fit=crop',
    bgColor: 'from-pink-500 to-purple-600'
  },
  {
    id: 2,
    title: '轻奢女装专场',
    subtitle: '优雅出行，精致生活',
    description: '精选高端女装品牌',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop',
    bgColor: 'from-rose-500 to-pink-600'
  },
  {
    id: 3,
    title: '男装潮流焕新',
    subtitle: '商务休闲两相宜',
    description: '型男必备，时尚穿搭',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=600&fit=crop',
    bgColor: 'from-blue-500 to-cyan-600'
  },
  {
    id: 4,
    title: '运动健身专区',
    subtitle: '运动装备超值购',
    description: '健康生活，活力运动',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=600&fit=crop',
    bgColor: 'from-green-500 to-emerald-600'
  },
  {
    id: 5,
    title: '鞋靴箱包特惠',
    subtitle: '大牌好物低至3折',
    description: '精致配件，点亮造型',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=600&fit=crop',
    bgColor: 'from-amber-500 to-orange-600'
  }
];

// 促销活动数据
const PROMOTIONS = [
  { id: 1, title: '限时秒杀', subtitle: '每天10点准时开抢', icon: '⏰', color: '#ef4444', bgColor: 'bg-red-50 border-red-200' },
  { id: 2, title: '新人专享', subtitle: '首单满100减20', icon: '🎁', color: '#8b5cf6', bgColor: 'bg-purple-50 border-purple-200' },
  { id: 3, title: '满减优惠', subtitle: '满299减50', icon: '💰', color: '#10b981', bgColor: 'bg-green-50 border-green-200' },
  { id: 4, title: '品牌特卖', subtitle: '大牌好物低至3折', icon: '🏷️', color: '#f59e0b', bgColor: 'bg-amber-50 border-amber-200' },
  { id: 5, title: '积分兑换', subtitle: '积分当钱花', icon: '⭐', color: '#3b82f6', bgColor: 'bg-blue-50 border-blue-200' },
  { id: 6, title: '会员专享', subtitle: '会员日双倍积分', icon: '👑', color: '#ec4899', bgColor: 'bg-pink-50 border-pink-200' }
];

// 导出数据
window.SHOP_DATA = {
  categories: CATEGORIES,
  products: generateProducts(),
  banners: BANNERS,
  promotions: PROMOTIONS
};
