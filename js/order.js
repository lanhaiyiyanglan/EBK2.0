select * from InternalOrders where OrderNo='MT-B1806291001510002'
select * from InternalOrdersLog where OrderNo='MT-B1806291001510002'
select * from MT_SupplierOrderLog where OrderId='b33c67921447443fa86edea945bb57fe'
select * from EbkOrdersEx where OrderNo='MT-B1806291001510002'
select * from OrdersLog where OrderNo='MT-B1806291001510002'
select * from EmailConfig

select OrderState from Orders where OrderNo='MT-B1806291001510001'
select OrderState from InternalOrders where OrderNo='MT-B1806291001510001'

SELECT a.OrderNo,RoomType,TimeIn,TimeOut,RoomCode,a.ID AS OrderId,b.Overtime FROM dbo.Orders AS a LEFT JOIN dbo.EbkOrdersEx AS b ON a.OrderNo = b.OrderNo 
WHERE a.OperateType= 6 AND a.OrderState=2

select * from orders where OrderNo='MT-B1806291001510001'
update EmailConfig set SendEmailAddress='kebukeyichaoni@qq.com',SendEmailPwd='dw19911201' where EmailType=9

select HotelCode,SupplierCode from Orders where OrderNo='MT-B1806291001510002'
select count(1) FROM (select t1.OrderNo,HotelNo,oe.OverTime,Roomcode,oe.Operator,oe.ActualOperator,u.userName as userName,us.userName as uName,oe.IsOverTime,
CONVERT(varchar(20), t1.AddTime, 20) as AddTime,t1.HotelName,t1.RoomName,hl.EnName,sc.Name as CityName,ino.OrderState as inoistate,OperateType,au.UserId as uid,sc.Id as sid,
t1.Count,t1.ContactName,t1.RoomType,
CONVERT(varchar(10),t1.TimeIn,23) as TimeIn,CONVERT(varchar(10),t1.TimeOut,23) as TimeOut,DATEDIFF ( DAY ,t1.TimeIn ,t1.TimeOut ) as Days,CheckInNum,
t1.PayMoney,t1.OrderState,t1.Id,t1.HotelCode as HotelId,t1.TotalType,t1.Tenant,dbo.[Fun_GetOrderCustoms](t1.Id) as RoomCustoms,ino.SupState,t2.ChineseName
from dbo.Orders t1
LEFT JOIN dbo.InternalOrders ino ON t1.Id=ino.OrderId LEFT JOIN dbo.UserInfo AS t2 ON t2.UserId=t1.UserId
LEFT JOIN MTEBK.EBKv20.dbo.Ebk_UserMapHotel au on au.HotelCode=t1.HotelCode and au.SupCode=t1.SupplierCode 
LEFT JOIN dbo.MT_Hotel hl on t1.HotelCode=hl.Code
LEFT JOIN SysCity sc on hl.CityCode=sc.CityCode
LEFT JOIN EbkOrdersEx oe on t1.OrderNo=oe.OrderNo
LEFT JOIN MTEBK.EBKv20.dbo.Ebk_User u on oe.Operator=u.Id
LEFT JOIN MTEBK.EBKv20.dbo.Ebk_User us on oe.ActualOperator=us.Id where 1=1)  T where 1=1  and OperateType=6 
and uid in ('7e42ed80912741e8b8865d11acd556a0','1d51854d1665408e888c5643e7bf6629','ba0788b9af024eda838db500a7745105') and inoistate=0 and inoistate=0

select * from Fin_HotelOrderRecord where B2BOrderCode='MT-B1806291001510010'

select Id,SupCode,UserId,OrderNo,HandleStatus,HandleTime,CreateTime  FROM Ebk_OrderNotice  
where SupCode='MT00001'  and UserId='7e42ed80912741e8b8865d11acd556a0' 
and HandleStatus = 2 and DATEDIFF(day,CreateTime, GETDATE()) < 2
select * from Ebk_User
select IsCancel,OrderNo from Orders where OrderNo='MT-B1807021001510023'
select * from dbo.OrderCancelRule  where MtOrderID = (select id from Orders where OrderNo='MT-B1807021001510023')
select * from dbo.Ebk_RoomCancelRule

select  u.SupCode,UserName,Email,Languages,u.Id from orders o
inner join  MTEBK.EBKv20.dbo.Ebk_UserMapHotel m on o.SupplierCode=m.SupCode and o.HotelCode = m.HotelCode
inner join  MTEBK.EBKv20.dbo.Ebk_User u on m.UserId=u.Id
where o.Id='6b311d3bfa8d42fabb0a9167a618f06b'

select * from EmailConfig
select * from  MTEBK.EBKv20.
dbo.Ebk_UserMapHotel
 
select * from Orders where OrderNo='MT-B1806271001510017'
select * from  MTEBK.EBKv20.dbo.Ebk_User
 MTEBK.EBKv20.dbo.

广州花园酒店
select * from Ebk_OrderNotice

update Ebk_OrderNotice set HandleStatus=2

select Id,SupCode,UserId,OrderNo,HandleStatus,HandleTime,CreateTime  FROM Ebk_OrderNotice  
where SupCode='MT00001'  and UserId='7e42ed80912741e8b8865d11acd556a0' 
and HandleStatus = 2 and DATEDIFF(day,CreateTime, GETDATE()) < 2

select * from EmailConfig
update EmailConfig set STMPServer='smtp.qq.com' where EmailType=9
update EmailConfig set SendEmailAddress='419816897@qq.com',SendEmailPwd='dlmggpjaaqmnbjad' where EmailType=9
不允许使用邮箱名称。 服务器响应为:authentication is required