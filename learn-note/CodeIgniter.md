# CodeIgniter

1. `/application/controllers` 下的控制器不可与 `/application/models` 下的模型重名。
2. CI 的 `Session` 是基于加密的 `cookie` 形成的，在 `application/config/config.php` 的 `encryption_key` 上存储了加密的key。
