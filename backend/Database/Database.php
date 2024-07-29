<?php

namespace App\Database;

use Exception;

class Database
{
	private $mysqli;

	public function __construct($host, $db, $user, $pass)
	{
		$this->mysqli = new \mysqli($host, $user, $pass, $db);

		if ($this->mysqli->connect_errno) {
			throw new \RuntimeException('Database connection error: ' . $this->mysqli->connect_error);
		}

		$this->mysqli->set_charset('utf8');
	}

	private function stmt($sql, $params = [])
	{
		$stmt = $this->mysqli->prepare($sql);
		if ($stmt === false) {
			throw new \RuntimeException('Prepare failed: ' . $this->mysqli->error);
		}

		$types = '';
		foreach ($params as $param) {
			$types .= is_int($param) ? 'i' : (is_double($param) ? 'd' : 's');
		}
		$stmt->bind_param($types, ...$params);

		$stmt->execute();
		if ($stmt->error) {
			throw new \RuntimeException('Execute failed: ' . $stmt->error);
		}

		return $stmt;
	}

	public function query($sql, $params = [])
	{
		if (empty($params)) {
			$result = $this->mysqli->query($sql);
			if ($this->mysqli->error) {
				throw new \RuntimeException('Query failed: ' . $this->mysqli->error);
			}
			return $result;
		}

		$stmt = $this->stmt($sql, $params);

		$result = preg_match('/^(SELECT|SHOW|DESCRIBE|EXPLAIN)/i', $sql) ?
			$stmt->get_result() : $result = $stmt->affected_rows;

		$stmt->close();

		return $result;
	}

	public function fetchAll($sql, $params = [])
	{
		$result = $this->query($sql, $params);
		return $result->fetch_all(MYSQLI_ASSOC);
	}

	public function fetch($sql, $params = [])
	{
		$result = $this->query($sql, $params);
		return $result->fetch_assoc();
	}

	public function insert($sql, $params = [])
	{
		$stmt = $this->stmt($sql, $params);
		$lastId = $this->mysqli->insert_id;
		$stmt->close();
		return $lastId;
	}

	public function delete($sql, $params = [])
	{
		$stmt = $this->stmt($sql, $params);
		$affectedRows = $stmt->affected_rows;
		$stmt->close();
		return $affectedRows;
	}

	public function close()
	{
		$this->mysqli->close();
	}
}
