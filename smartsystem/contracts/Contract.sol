// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC20Interface {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenTransferContract {
    address public owner;
    mapping(address => bool) private verifiedTokens;
    address[] public verifiedTokensList;

    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
        string message;
    }

    event TransactionCompleted(
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        string message
    );

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "This function is for owner only");
        _;
    }

    modifier onlyVerifiedToken(address tokenAddress) {
        require(verifiedTokens[tokenAddress], "Token is not verified.");
        _;
    }

    function addVerifiedToken(address token) public onlyOwner {
        require(verifiedTokens[token] == false, "Token is already verified.");
        verifiedTokens[token] = true;
        verifiedTokensList.push(token);
    }

    function getVerifiedTokens() public view returns (address[] memory) {
        return verifiedTokensList;
    }

    function transfer(
        IERC20Interface token,
        address to,
        uint256 amount,
        string memory message
    )
        public
        onlyVerifiedToken(address(token))
        returns (bool)
    {
        uint256 senderBalance = token.balanceOf(msg.sender);
        require(senderBalance >= amount, "Insufficient balance.");

        bool success = token.transferFrom(msg.sender, to, amount);
        require(success, "Transaction failed");

        Transaction memory transaction = Transaction({
            sender: msg.sender,
            receiver: to,
            amount: amount,
            message: message
        });

        emit TransactionCompleted(
            transaction.sender,
            transaction.receiver,
            transaction.amount,
            transaction.message
        );

        return true;
    }
}