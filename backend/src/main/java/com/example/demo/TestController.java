package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@RestController
public class TestController {

    @GetMapping("test")
    public Mono<String> getTestDto(final @RequestParam String name,
                                    final ServerWebExchange exchange) {
        return Mono.just("test");
    }

//    @PostMapping("test")
//    public Mono<TestDto> postTestDto(@Valid @RequestBody final TestDto testDto,
//                                     final ServerWebExchange exchange) {
//        return Mono.just(testDto);
//    }

}
