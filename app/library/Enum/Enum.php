<?php
namespace Library\Enum;

class Enum
{
	const STATUS_ACTIVE = 1;	
	const STATUS_INACTIVE = 2;

	public static $arrStatus = array(
			self::STATUS_ACTIVE => "เปิดใช้งาน",
			self::STATUS_INACTIVE => "ปิดใช้งาน",
	);

}
?>