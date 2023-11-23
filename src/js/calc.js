const solver = require('javascript-lp-solver');

/** 原代码
function [Q9, Q10, Q11, Q12, totalAP] = baneverland(pt, mushroom, bamboos, ginseng)
% 将输入变量加1并覆盖保存
pt = pt + 1;
mushroom = mushroom + 1;
bamboos = bamboos + 1;
ginseng = ginseng + 1;

% 修改系数矩阵 A
A = [-5pt, -5pt, -5pt, -20pt;
-30mushroom, 0, 0, -4mushroom;
0, -24bamboos, 0, -4bamboos;
0, 0, -20ginseng, -4ginseng];

% 右侧约束矢量 b
b = [-10000; -7609; -6561; -4955];

% 目标函数系数矢量
f = [1; 1; 1; 1];

% 变量下界
lb = zeros(4, 1);

% 整数规划条件
intcon = 1:4;

% 求解整数线性规划问题
[x, fval, exitflag, output] = intlinprog(f, intcon, A, b, [], [], lb);

% 输出结果
Q9 = x(1);
Q10 = x(2);
Q11 = x(3);
Q12 = x(4);

% 输出解矢量和目标函数值(乘以15)
disp(['解矢量，您要刷取的值是：Q9=', num2str(Q9), ', Q10=', num2str(Q10), ', Q11=', num2str(Q11), ', Q12=', num2str(Q12)]);
disp(['目标函数：您总共需要花费', num2str(fval * 15), '点AP']);
end

 */
export async function baneverland(mushroom, bamboos, ginseng, pt, setting) {
  // 将输入变量加1并覆盖保存
  pt += 1;
  mushroom += 1;
  bamboos += 1;
  ginseng += 1;

  var model = {
    "optimize": "cost",
    "opType": "min",
    "constraints": {
        "constraint1": { "max": - setting.pt },
        "constraint2": { "max": - setting.mushroom },
        "constraint3": { "max": - setting.bamboos },
        "constraint4": { "max": - setting.ginseng }
    },
    "variables": {
      "Q9": { "cost": 1, "constraint1": -Math.ceil(5*pt), "constraint2": -Math.ceil(30*mushroom) },
      "Q10": { "cost": 1, "constraint1": -Math.ceil(5*pt), "constraint3": -Math.ceil(24*bamboos) },
      "Q11": { "cost": 1, "constraint1": -Math.ceil(5*pt), "constraint4": -Math.ceil(20*ginseng) },
      "Q12": { "cost": 1, "constraint1": -Math.ceil(20*pt), "constraint2": -Math.ceil(4*mushroom), "constraint3": -Math.ceil(4*bamboos), "constraint4": -Math.ceil(4*ginseng) }
    },
    "ints": {
        "Q9": 1,
        "Q10": 1,
        "Q11": 1,
        "Q12": 1
    }
};


  var result = solver.Solve(model);

  console.log("解矢量，您要刷取的值是：Q9=" + result.Q9 + ", Q10=" + result.Q10 + ", Q11=" + result.Q11 + ", Q12=" + result.Q12);
  console.log("目标函数：您总共需要花费" + result.result * 15 + "点AP");

  return result;
}
