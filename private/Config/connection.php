<?php

namespace GCE\Config;

use Throwable;
use Exception;
use PDO;

class Connection
{

    public $DB;

    public function __construct()
    {
        try {
            $connection = (object) ["dsn" => "mysql:dbname=c2ygurhukctq4vp7;host=x8autxobia7sgh74.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", "user" => "aiuqi3eqnpzmr1dl", "password" => "rjh5zphxopx0soza"];
            $this->DB = new PDO($connection->dsn, $connection->user, $connection->password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        } catch (\Throwable $th) {
            throw new Exception("Falla la conexión a BD: " . $th->getMessage(), 1);
        }
    }
}
